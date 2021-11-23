import { Router } from "express";
const fs = require('fs').promises;


const router = Router();


router.get('/login', async (req, res) => {
  res.send( await fs.readFile('./public/login.html', 'utf-8') );
})

export default router;