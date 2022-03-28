import { Router } from "express";
import AdsModel from "../../models/ads";
import upload from "../../multer_config";
import { deleteFile, flashMsg } from "../../util";

const router = Router();

router.get('/delete/:id', upload, async (req, res) => {
  const session: any = req.session;
  const user = session.user;

  if (!user) {
    res.redirect('/users/login');
    return;
  }

  const adId = req.params.id;

  const response: any = await AdsModel.findByIdAndDelete(adId);

  if (response) {
    const file = "static/ads/" + response.path;
    await deleteFile(file);
    flashMsg(req, "Ad deleted successfully");
    res.redirect('/users/profile');
  } else {
    res.send("No ad with this ID");
  }
})


export default router;
