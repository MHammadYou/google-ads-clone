import { Router } from "express";
import { readFile } from "fs/promises";

import { UsersModel } from "../../models";

const router = Router();


router.get('/signup', async (req, res) => {
  res.send( await fs.readFile('./public/users/signup.html', 'utf-8') );
})

export default router;
