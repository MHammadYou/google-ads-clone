import { Router } from "express";
import UserModel from "../../models/users";
import bcrypt from "bcrypt";
import has = Reflect.has;


const router = Router();


router.get('/signup', (req, res) => {
  const data = {
    title: "Signup",
    dir: ".."
  }
  res.render('users/signup', data);
})

router.post('/signup', (req, res) => {

  const password = req.body.password;

  bcrypt.hash(password, 10, function(err, hash) {

    const data = {
      username: req.body.username,
      email: req.body.email,
      password: hash,
      accountType: "advertiser",
      balance: 0,
    }

    const user = new UserModel(data);
    user.save()
      .then((response) => {
        res.send(response);
      })
      .catch(error => {
        console.log(error);
      })

  })
})

export default router;
