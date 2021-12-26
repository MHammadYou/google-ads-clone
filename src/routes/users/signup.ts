import { Router } from "express";
import { readFile } from "fs/promises";

import { UsersModel } from "../../models";

const router = Router();


router.get('/signup', async (req, res) => {
  res.send( await readFile('./public/users/signup.html', 'utf-8') );
})


router.post('/signup', (req, res) => {
  res.send("Post req on /signup")
})

export default router;
