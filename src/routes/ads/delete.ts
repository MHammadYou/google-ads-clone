import { Router } from "express";
import AdsModel from "../../models/ads";

const router = Router();

router.get('/delete/:id', async (req, res) => {
  const session: any = req.session;
  const user = session.user;

  if (!user) {
    res.redirect('/users/login');
    return;
  }

  const adId = req.params.id;
  const response: any = await AdsModel.findByIdAndDelete(adId);

  if (response) {
    res.redirect('/users/profile');
  } else {
    res.send("No ad with this ID");
  }
})


export default router;
