import { Router } from "express";
import AdsModel from "../models/ads";
import UsersModel from "../models/users";

const router = Router();


router.get('/get-iframe/:id', async (req, res) => {
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

  const adId = req.params.id;
  const ad = await AdsModel.findById(adId);
  
  res.send(ad);
})

export default router;
