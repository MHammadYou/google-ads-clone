import { Router } from "express";
import { UserModel } from "../../models";

const router = Router();

router.get('/login', async (req, res) => {
  const data = {
    title: "Login",
    dir: ".."
  }
  res.render('users/login', data);
})

router.post('/login', (req, res) => {
  res.json({'email': req.body.email});
})

export default router;