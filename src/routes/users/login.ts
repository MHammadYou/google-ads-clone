import { Router } from "express";


const router = Router();


router.get('/login', async (req, res) => {
  const data = {
    title: "Login",
    dir: ".."
  }
  res.render('users/login', data);
})

router.post('/login', (req, res) => {
  console.log("You made a post request");
})

export default router;