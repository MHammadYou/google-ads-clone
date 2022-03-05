import { Router } from "express";
import UserModel from "../../models/users";

const router = Router();

router.get('/login', async (req, res) => {
  const data = {
    title: "Login",
    dir: ".."
  }
  res.render('users/login', data);
})

router.post('/login', async (req, res) => {
  const data = {
    email: req.body.email,
    password: req.body.password
  }

  try {
    const response = await UserModel.findOne({'email': data.email})
    res.send(response);
  } catch (error) {
    res.send(error);
  }

})

export default router;