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
  res.send("You made a post request on post route");
})

export default router;
