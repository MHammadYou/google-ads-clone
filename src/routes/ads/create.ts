import { Router } from "express";
import AdModel from "../../models/ads";
import UsersModel from "../../models/users";
import CategoriesModel from "../../models/categories";
import upload from "../../multer_config";

const router = Router();


router.get('/create', async (req, res) => {
  const session: any = req.session;
  const user = session.user;

  if (!user) {
    res.redirect('/users/login');
    return;
  }

  const categories = await CategoriesModel.find();

  const data = {
    title: "Create ad",
    dir: "..",
    user,
    categories
  }
  res.render('ads/create-ad', data);
})

router.post('/create', upload.single('path'), async (req, res) => {

  const session: any = req.session;
  const username = session.user;

  const user = await UsersModel.findOne({ username }).exec();
  if (!user) {
    res.send("No such user in the database");
    return;
  }

  const file = req.file;
  const path = file?.filename;

  const { category } = req.body;

  const data = {
    path,
    category,
    user: user._id
  }

  // const newAd = new AdModel(data)
  const newAd = new AdModel(data);
  try {
    await newAd.save();
    res.redirect("/users/profile");
  } catch (error) {
    res.send(error);
  }
})

export default router;