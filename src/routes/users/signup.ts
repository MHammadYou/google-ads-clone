import { Router } from "express";
import UserModel from "../../models/users";
import bcrypt from "bcrypt";

const router = Router();


router.get('/signup', (req, res) => {
  const session: any = req.session;
  const user = session.user;
  const data = {
    title: "Signup",
    dir: "..",
    user
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
  try {
    await user.save();
    const session: any = req.session;
    session.user = data.username;
    res.redirect('/');
  } catch (error) {
    res.send(error);
  }
})

export default router;
