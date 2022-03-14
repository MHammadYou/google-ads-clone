import { Router } from "express";
import AdModel from "../../models/ads";
import UsersModel from "../../models/users";

const router = Router();


router.get('/create', async (req, res) => {
  const session: any = req.session;
  const user = session.user;

  if (!user) {
    res.redirect('/users/login');
    return;
  }

  const data = {
    title: "Create ad",
    dir: "..",
    user
  }
  res.render('ads/create-ad', data);
})

router.post('/create', async (req, res) => {

  const session: any = req.session;
  const username = session.user;

  const user = await UsersModel.findOne({ username }).exec();
  if (!user) {
    res.send("No such user in the database");
    return;
  }

  const { path, category } = req.body;

  const data = {
    path,
    category,
    user: user.id
  }

  // const newAd = new AdModel(data)
  const newAd = new AdModel(data);
  try {
    await newAd.save();
    res.send("Ad created successfully");
  } catch (error) {
    res.send(error);
  }
})

export default router;