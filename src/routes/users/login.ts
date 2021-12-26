import { Router } from "express";
import { readFile } from "fs/promises";

import { UsersModel } from "../../models";

const router = Router();


router.get('/login', async (req, res) => {
  res.send( await readFile('./public/users/login.html', 'utf-8') );
})

router.post('/login', (req, res) => {
  res.send("Post req on /login")
})

export default router;