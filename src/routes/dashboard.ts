import { Router } from "express";
import UsersModel from "../models/users";
import {Code, flashMsg} from "../util";
import AdsModel from "../models/ads";

const router = Router();


router.get('/dashboard', async (req, res) => {
  const session: any = req.session;
  const username = session.user;

  if (!username) {
    flashMsg(req, "You must login first to access dashboard", Code.Error);
    res.redirect('/users/login');
    return;
  }

  const user: any = await UsersModel.findOne({ username });
  const ads = await AdsModel.find({ user: user._id });

  const data = {
    title: "Ads Platform",
    dir: ".",
    user,
    ads
  }
  res.render("dashboard", data);
})


export default router;
