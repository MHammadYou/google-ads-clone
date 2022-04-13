import { Router } from "express";
import UserModel from "../../models/users";
import bcrypt from "bcrypt";
import { Code, flashMsg, getFlashMsg } from "../../util";

const router = Router();

router.get('/login', async (req, res) => {
  const session: any = req.session;
  const user = session.user;

  if (user) {
    res.redirect('/');
    return;
  }

  const data = {
    title: "Login",
    dir: "..",
    user,
    ...getFlashMsg(req)
  }
  res.render('users/login', data);
})

router.post('/login', async (req, res) => {

  const { email, password } = req.body;

  if (!email) {
    flashMsg(req, "Invalid Email", Code.Error);
    res.redirect('users/login');
    return;
  }

  if (!password) {
    flashMsg(req, "Invalid password", Code.Error);
    res.redirect('users/login');
    return;
  }

  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        const session: any = req.session;
        session.user = user.username;
        res.redirect('/dashboard');
      } else {
        flashMsg(req, "Email and password didn't match", Code.Error);
        res.redirect('/users/login');
      }
    } else {
      flashMsg(req, "Email and password didn't match", Code.Error);
      res.redirect('/users/login');
    }
  } catch (error) {
    console.log(error)
    res.send(error);
  }

})

export default router;