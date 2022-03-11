import { Router } from "express";

const router = Router();

router.get('/profile', (req, res) => {
  const session: any = req.session;
  const user = session.user;
  const data = {
    title: "Profile",
    dir: "..",
    user
  }
  res.render('users/profile', data);
})

export default router;