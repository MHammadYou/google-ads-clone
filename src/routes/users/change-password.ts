import { Router } from "express";
import bcrypt from "bcrypt";
import UsersModel from "../../models/users";
import {Code, flashMsg, getFlashMsg} from "../../util";

const router = Router();

router.get('/change-password', async (req, res) => {
  const session: any = req.session;
  const username = session.user;

  if (!username) {
    res.redirect('/users/login');
    return;
  }

  const user: any = await UsersModel.findOne({ username })

  const data = {
    title: "Change password",
    dir: "..",
    user,
    ...getFlashMsg(req)
  }
  res.render('users/change-password', data);
})

router.post('/change-password', async (req, res) => {
  const session: any = req.session;
  const username = session.user;

  if (!username) {
    res.redirect('/users/login');
    return;
  }

  const user: any = await UsersModel.findOne({ username })
  const { password } = req.body;

  if (!password) {
    flashMsg(req, "Invalid password", Code.Error);
    res.redirect('users/login');
    return;
  }

  user.password = await bcrypt.hash(password, 10);
  user.save();
  res.redirect('/users/logout');
})

export default router;