import { Router } from "express";

const router = Router();

router.get('/', async (req, res) => {
  const session: any = req.session;
  const user = session.user;
  const data = {
    title: "Ads",
    dir: "..",
    user
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
