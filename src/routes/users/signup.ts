import { Router } from "express";

const router = Router();


router.get('/signup', (req, res) => {
  const data = {
    title: "Signup",
    dir: ".."
  }
  res.render('users/signup', data);
})

export default router;
