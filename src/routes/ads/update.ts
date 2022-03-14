import { Router } from "express";

const router = Router();


router.get('/update/:id', async (req, res) => {
  const session: any = req.session;
  const user = session.user;

  if (!user) {
    res.redirect('/users/login');
    return;
  }

  const data = {
    title: "Update ad",
    dir: "../..",
    id: req.params.id,
    user
  }
  res.render('ads/update', data);
})

router.post('/update/:id', async (req, res) => {
  const session: any = req.session;
  const user = session.user;

  if (!user) {
    res.redirect('/users/login');
    return;
  }

  res.send("You made a post request on update route");
})

export default router;