import { Router } from "express";
import { readFile } from "fs/promises";


const router = Router();


router.get('/login', async (req, res) => {
  res.send( await readFile('./public/users/login.html', 'utf-8') );
})

export default router;