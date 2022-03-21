import { Router } from "express";
import AdsModel from "../../models/ads";
import upload from "../../multer_config";
import CategoriesModel from "../../models/categories";
import { deleteFile } from "../../util";

const router = Router();


router.get('/update/:id', async (req, res) => {
  const session: any = req.session;
  const user = session.user;

  if (!user) {
    res.redirect('/users/login');
    return;
  }

  const adId = req.params.id;
  const ad: any = await AdsModel.findById(adId);

  if (!ad) {
    res.send("No ad with this id");
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
    selectedCategory
  }
  res.render('ads/update', data);
})

router.post('/update/:id', upload, async (req, res) => {
  const session: any = req.session;
  const user = session.user;

  if (!user) {
    res.redirect('/users/login');
    return;
  }

  const adId = req.params.id;
  const { category } = req.body;

  const file = req.file;
  const path = file?.filename;

  console.log(file)

  let ad: any;

  if (!path) {
    ad = await AdsModel.findByIdAndUpdate(adId, { category });
  } else {

    const prevAd: any = await AdsModel.findById(adId);
    const file = "static/ads/" + prevAd.path;
    await deleteFile(file);

    ad = await AdsModel.findByIdAndUpdate(adId, { path, category });
  }

  if (!ad) {
    res.send("No ad with this id");
    return;
  }
  res.redirect('/users/profile');
})

export default router;