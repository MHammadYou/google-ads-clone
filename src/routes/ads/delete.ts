import { Router } from "express";
import AdsModel from "../../models/ads";
import upload from "../../multer_config";
import { deleteFile, flashMsg } from "../../util";
import UsersModel from "../../models/users";

const router = Router();

router.get('/delete/:id', upload, async (req, res) => {
  const session: any = req.session;
  const username = session.user;

  if (!username) {
    res.redirect('/users/login');
    return;
  }

  const user: any = await UsersModel.findOne({ username });

  if (user.accountType == "publisher") {
    res.redirect('/dashboard');
    return;
  }

  const adId = req.params.id;

  const ad: any = await AdsModel.findById(adId);
  const adUser: any = await UsersModel.findOne(ad.user);

  if (!(adUser.username == user.username)) {
    res.redirect("/dashboard");
    return;
  }

  const response: any = await AdsModel.findByIdAndDelete(adId);

  if (response) {
    const file = "static/ads/" + response.path;
    await deleteFile(file);
    flashMsg(req, "Ad deleted successfully");
    res.redirect('/dashboard');
  } else {
    res.send("No ad with this ID");
  }
})


export default router;
