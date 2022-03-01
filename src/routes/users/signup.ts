import { Router } from "express";
import { UsersModel } from "../../models";

const router = Router();


router.get('/signup', (req, res) => {
  const data = {
    title: "Signup",
    dir: ".."
  }
  res.render('users/signup', data);
})

router.post('/signup', (req, res) => {
  // const data = {
  //   username: req.body.username,
  //   email: req.body.email,
  //   password: req.body.password,
  //   accountType: "advertiser",
  //   balance: 0,
  // }

  // const _data = {
  //   username: "username",
  // }
  // const users = new UsersModel({abc: "username"});
  // user.save()
  //   .then((response) => {
  //     res.send(response);
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   })
  res.send("Post req")
})

export default router;
