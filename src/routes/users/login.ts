import { Router } from "express";
import UserModel from "../../models/users";
import bcrypt from "bcrypt";

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
    const response: any = await UserModel.findOne({'email': data.email})
    const match = await bcrypt.compare(data.password, response.password);

    if (match) {
      res.send("Login successful");
      return;
    }
    res.send("Invalid credentials");

  } catch (error) {
    console.log(error)
    res.send(error);
  }

})

export default router;