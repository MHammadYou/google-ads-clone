import { Router } from "express";
import UserModel from "../../models/users";
import bcrypt from "bcrypt";
import { Code, flashMsg, getFlashMsg } from "../../util";

const router = Router();

router.get('/signup', (req, res) => {
  const session: any = req.session;
  const user = session.user;

  if (user) {
    res.redirect('/');
    return;
  }

  const data = {
    title: "Signup",
    dir: "..",
    user,
    ...getFlashMsg(req)
  };
  res.render('users/signup', data);
})

router.post('/signup', async (req, res) => {

  const password = req.body.password;
  const hash = await bcrypt.hash(password, 10);

  const userData = {
    username: req.body.username,
    email: req.body.email,
    password: hash,
    accountType: req.body.accountType,
  };

  const existingUsername = await UserModel.findOne({ username: userData.username });
  const existingEmail = await UserModel.findOne({ email: userData.email });

  if (existingUsername) {
    flashMsg(req, "Username Already exists", Code.Error)
    res.redirect('/users/signup');
    return;
  } else if (existingEmail) {
    flashMsg(req, "An account with this email exists", Code.Error)
    res.redirect('/users/signup');
    return;
  }

  const user = new UserModel(userData);
  try {
    await user.save();
    const session: any = req.session;
    session.user = userData.username;
    flashMsg(req, "Account created successfully");
    res.redirect('/dashboard');
  } catch (error) {
    res.send(error);
  }
});

export default router;
