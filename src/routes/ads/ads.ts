import {Router} from "express";
import {Code, flashMsg, getFlashMsg} from "../../util";
import UsersModel from "../../models/users";
import AdsModel from "../../models/ads";

const router = Router();

router.get('/', async (req, res) => {
  const session: any = req.session;
  const username = session.user;

  if (!username) {
    flashMsg(req, "You must login to access ads", Code.Error);
    res.redirect("/users/login");
    return;
  }

  const user: any = await UsersModel.findOne({ username });
  const ads = await AdsModel.find({ user: user._id });

  const data = {
    title: "Ads",
    dir: "..",
    user,
    ads,
    ...getFlashMsg(req)
  }
  res.render('ads/ads', data);
})

// router.get('/:id', async (req, res) => {
//   const data = {
//     title: "Ads/id",
//     dir: "..",
//     id: req.params.id
//   }
//   res.render('ads/ads', data);
// })

export default router;
