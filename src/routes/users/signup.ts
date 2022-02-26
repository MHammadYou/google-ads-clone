import { Router } from "express";

const router = Router();


router.get('/signup', (req, res) => {
  const data = {
    title: "Signup",
    dir: ".."
  }
  res.render('users/signup', data);
})

router.post('/signup', (req, res) => {
  const data = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  }
  res.json(data);
})

export default router;
