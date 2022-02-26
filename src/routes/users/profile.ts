import { Router } from "express";

const router = Router();

router.get('/profile', (req, res) => {
  const data = {
    title: "Profile",
    dir: ".."
  }
  res.render('users/profile', data);
})

export default router;