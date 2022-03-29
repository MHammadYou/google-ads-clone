import { Router } from "express";
import fs from "fs";
import AdModel from "../../models/ads";
import UsersModel from "../../models/users";
import CategoriesModel from "../../models/categories";
import upload from "../../multer_config";
import {Code, flashMsg, getFlashMsg} from "../../util";

const router = Router();


router.get('/create', async (req, res) => {
  const session: any = req.session;
  const user = session.user;

  if (!user) {
    res.redirect('/users/login');
    return;
  }

  const adsDir = "./static/ads";

  if (!fs.existsSync(adsDir)) {
    console.log('Ads dir not found!!!');
    fs.mkdir(adsDir, { recursive: true }, function(err) {
      if (err) {
        console.log(err)
      } else {
        console.log("Created ads dir");
      }
    })
  }

  const categories = await CategoriesModel.find();

  const data = {
    title: "Create ad",
    dir: "..",
    user,
    categories,
    ...getFlashMsg(req)
  }
  res.render('ads/create-ad', data);
})

router.post('/create', upload, async (req, res) => {

  const session: any = req.session;
  const username = session.user;



  const user = await UsersModel.findOne({ username });
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

  const newAd = new AdModel(data);
  try {
    await newAd.save();
    flashMsg(req, "Ad created successfully");
    res.redirect("/dashboard");
  } catch (error) {
    console.log(error);
    flashMsg(req, "Something went wrong", Code.Error);
    res.redirect("/ads/create");
  }
})

export default router;