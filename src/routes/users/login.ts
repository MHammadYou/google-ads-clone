import { Router } from "express";
// import { readFile } from "fs/promises";
const fs = require('fs').promises;


const router = Router();


router.get('/login', async (req, res) => {
  res.send( await fs.readFile('./public/users/login.html', 'utf-8') );
})

export default router;