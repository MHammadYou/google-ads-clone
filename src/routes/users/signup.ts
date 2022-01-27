import { Router } from "express";

const router = Router();


router.get('/signup', (req, res) => {
  res.render('users/signup');
})

export default router;
