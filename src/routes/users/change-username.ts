import { Router } from "express";
import UsersModel from "../../models/users";

const router = Router();

router.get('/change-username', async (req, res) => {
  const session: any = req.session;
  const username = session.user;

  if (!username) {
    res.redirect('/users/login');
    return;
  }

  const user: any = await UsersModel.findOne({ username })

  const data = {
    title: "Change username",
    dir: "..",
    user
  }
  res.render('users/change-username', data);
})

router.post('/change-username', async (req, res) => {
  const session: any = req.session;
  const _username = session.user;

  if (!_username) {
    res.redirect('/users/login');
    return;
  }

  const user: any = await UsersModel.findOne({ username: _username })
  const { username } = req.body;

  const userExistOrNot = await UsersModel.findOne({ username });

  if (userExistOrNot) {
    res.send("This username is already takes");
  } else {
    user.username = username;
    session.user = user.username;
    user.save();
    res.redirect('/users/profile');
  }
})

export default router;