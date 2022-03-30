import { Router } from "express";
import AdsModel from "../models/ads";
import UsersModel from "../models/users";

const router = Router();


router.get('/', async (req, res) => {
  const session: any = req.session;
  const username = session.user;

  if (!username) {
    res.redirect('/users/login');
    return;
  }

  const user: any = await UsersModel.findOne({ username });

  if (user.accountType == "advertiser") {
    res.redirect('/dashboard');
    return;
  }

  const ads = await AdsModel.find();
  const random = Math.floor(Math.random() * ads.length);
  const ad: any = ads[random];

  const frame = `<iframe height="100%" width="100%" src="http://localhost:5000/get-iframe/${ad._id}/frame"></iframe>`

  const data = {
    title: "Get Iframe",
    dir: "..",
    user,
    ad,
    frame
  }

  res.render('iframe', data);
})


router.get('/:id', async (req, res) => {
  const session: any = req.session;
  const username = session.user;

  if (!username) {
    res.redirect('/users/login');
    return;
  }

  const user: any = await UsersModel.findOne({ username });

  if (user.accountType == "advertiser") {
    res.redirect('/dashboard');
    return;
  }

  const adId = req.params.id;
  const ad = await AdsModel.findById(adId);

  const frame = `<iframe height="100%" width="100%" src="http://localhost:5000/get-iframe/${adId}/frame"></iframe>`

  const data = {
    title: "Get Iframe",
    dir: "..",
    user,
    ad,
    frame
  }
  
  res.render('iframe', data);
})

router.get('/:id/frame', async (req, res) => {

  const ad: any = await AdsModel.findById(req.params.id);

  const frame =
    `        
        <div class="flex flex-col w-full w-1/2 p-6 shadow-md cursor-pointer w-96 hover:-translate-y-1 duration-300">
            <div class="inline relative group h-48">
                <img class="absolute rounded-t object-cover h-full w-full" src="../../ads/${ad.path}" alt="Ad Preview" />
            </div>
        </div>
    `
  res.send(frame);
})

export default router;
