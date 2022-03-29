import { Router } from "express";
import AdsModel from "../models/ads";
import UsersModel from "../models/users";

const router = Router();


router.get('/get-iframe', async (req, res) => {
  const session: any = req.session;
  const username = session.user;

  if (!username) {
    res.redirect('/');
    return;
  }

  const user: any = await UsersModel.findOne({ username });

  if (user.accountType == "advertiser") {
    res.redirect('/dashboard');
    return;
  }

  const ad = await AdsModel.find();
  
  res.send(ad);
})

export default router;
