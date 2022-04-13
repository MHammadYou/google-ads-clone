import { Router } from "express";
import UsersModel from "../../models/users";
import AdsModel from "../../models/ads";
import { getFlashMsg } from "../../util";

const router = Router();

router.get('/profile', async (req, res) => {
  const session: any = req.session;
  const username = session.user;

  if (!username) {
    res.redirect('/users/login');
    return;
  }

  const user: any = await UsersModel.findOne({ username })

  let ads;

  if (user.accountType == "advertiser") {
    ads = await AdsModel.find({ user: user._id });
  } else {
    ads = await AdsModel.find();
  }

  const data = {
    title: "Profile",
    dir: "..",
    user,
    ads,
    ...getFlashMsg(req)
  }
  res.render('users/profile', data);
})

export default router;