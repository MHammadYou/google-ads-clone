import { Router } from "express";
import UsersModel from "../../models/users";
import AdsModel from "../../models/ads";

const router = Router();

router.get('/profile', async (req, res) => {
  const session: any = req.session;
  const username = session.user;

  if (!username) {
    res.redirect('/users/login');
    return;
  }

  const user: any = await UsersModel.findOne({ username })
  const ads = await AdsModel.find({ user: user._id });

  const data = {
    title: "Profile",
    dir: "..",
    user,
    ads
  }
  res.render('users/profile', data);
})

export default router;