import { Router } from "express";
import UserModel from "../../models/users";
import bcrypt from "bcrypt";

const router = Router();


router.get('/signup', (req, res) => {
  const data = {
    title: "Signup",
    dir: ".."
  }
  res.render('users/signup', data);
})

router.post('/signup', async (req, res) => {

  const password = req.body.password;
  const hash = await bcrypt.hash(password, 10);

  const data = {
    username: req.body.username,
    email: req.body.email,
    password: hash,
    accountType: req.body.accountType,
  }

  const user = new UserModel(data);
  const response = await user.save();
  res.send(response);

})

export default router;
