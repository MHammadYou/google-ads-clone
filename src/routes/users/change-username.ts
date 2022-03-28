import {Router} from "express";
import UsersModel from "../../models/users";
import {Code, flashMsg, getFlashMsg} from "../../util";

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
    user,
    ...getFlashMsg(req)
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
    flashMsg(req, "This username is already taken", Code.Error);
    res.redirect('/users/change-username');
  } else {
    user.username = username;
    session.user = user.username;
    user.save();
    flashMsg(req, "Username updated successfully");
    res.redirect('/users/profile');
  }
})

export default router;