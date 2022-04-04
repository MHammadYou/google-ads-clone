import { Router } from "express";
import AdsModel from "../../models/ads";
import upload from "../../multer_config";
import CategoriesModel from "../../models/categories";
import { deleteFile, flashMsg, getFlashMsg, Code } from "../../util";
import UsersModel from "../../models/users";
import path from "path";

const router = Router();


router.get('/update/:id', async (req, res) => {
  const session: any = req.session;
  const username = session.user;

  if (!username) {
    res.redirect('/users/login');
    return;
  }

  const user: any = await UsersModel.findOne({ username });

  if (user.accountType == "publisher") {
    res.redirect('/dashboard');
    return;
  }

  const adId = req.params.id;
  const ad: any = await AdsModel.findById(adId);

  if (!ad) {
    res.send("No ad with this id");
  }

  const adUser: any = await UsersModel.findById(ad.user);

  if (!(adUser.username == user.username)) {
    res.redirect("/dashboard");
    return;
  }

  const category: any = await CategoriesModel.findById(ad.category);
  const selectedCategory = category.category;

  const categories = await CategoriesModel.find();

  const data = {
    title: "Update ad",
    dir: "../..",
    id: req.params.id,
    user,
    ad,
    categories,
    selectedCategory,
    ...getFlashMsg(req)
  }
  res.render('ads/update', data);
})

router.post('/update/:id', upload, async (req, res) => {
  const session: any = req.session;
  const user = session.user;

  if (!user) {
    flashMsg(req, "You must login first", Code.Error);
    res.redirect('/users/login');
    return;
  }

  const adId = req.params.id;
  const { category } = req.body;

  const file = req.file;
  const _path: any = file?.filename;

  if (!category) {
    flashMsg(req, "Invalid category", Code.Error);
    res.redirect(`/ads/update/${adId}`);
    return;
  }

  const exten = path.extname(_path);

  if (exten != ".jpg" && exten != ".png") {
    flashMsg(req, "Invalid file", Code.Error);
    res.redirect(`/ads/update/${adId}`);
    return;
  }

  let ad: any;

  if (!_path) {
    ad = await AdsModel.findByIdAndUpdate(adId, { category });
  } else {

    const prevAd: any = await AdsModel.findById(adId);
    const file = "static/ads/" + prevAd.path;
    await deleteFile(file);

    ad = await AdsModel.findByIdAndUpdate(adId, { path: _path, category });
  }

  if (!ad) {
    res.send("No ad with this id");
    return;
  }
  flashMsg(req, "Ad updated successfully");
  res.redirect('/dashboard');
})

export default router;