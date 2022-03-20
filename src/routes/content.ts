import { Router } from "express";
import AdsModel from "../models/ads";

const router = Router();


router.get('/', (req, res) => {
  const session: any = req.session;
  const user = session.user;

  if (!user) {
    res.redirect('/');
    return;
  }

  const ad = AdsModel.find();
  
  res.send(ad);
})

export default router;
