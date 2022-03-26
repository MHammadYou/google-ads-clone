import { Router } from "express";
import UserModel from "../../models/users";
import bcrypt from "bcrypt";

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
  }
  res.render('users/login', data);
})

router.post('/login', async (req, res) => {

  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email })
    if (user) {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        const session: any = req.session;
        session.user = user.username;
        res.redirect('/');
      } else {
        res.redirect('/users/login');
      }
    } else {
      res.redirect('/users/login');
    }
  } catch (error) {
    console.log(error)
    res.send(error);
  }

})

export default router;