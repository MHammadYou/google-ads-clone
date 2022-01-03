import { Router } from "express";
import { readFile } from "fs/promises";

const router = Router();


router.get('/signup', async (req, res) => {
  res.send( await readFile('./public/users/signup.html', 'utf-8') );
})

export default router;
