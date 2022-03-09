import { Router } from "express";
import UserModel from "../../models/users";
import bcrypt from "bcrypt";
import session from "express-session";

const router = Router();

router.get('/login', async (req, res) => {
  const session: any = req.session;
  const user = session.user;
  const data = {
    title: "Login",
    dir: "..",
    user,
  }
  res.render('users/login', data);
})

router.post('/login', async (req, res) => {
  const data = {
    email: req.body.email,
    password: req.body.password
  }

  try {
    const user: any = await UserModel.findOne({'email': data.email})
    if (user) {
      const match = await bcrypt.compare(data.password, user.password);
      if (match) {
        const session: any = req.session;
        session.user = user.username;
        res.send("Login successful");
        return;
      }
      res.send("Invalid credentials");
    } else {
      res.send("No user found with this email");
    }
  } catch (error) {
    console.log(error)
    res.send(error);
  }

})

export default router;