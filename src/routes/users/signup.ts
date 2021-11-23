import { Router } from "express";
const fs = require('fs').promises;


const router = Router();


router.get('/signup', async (req, res) => {
  res.send( await fs.readFile('./public/signup.html', 'utf-8') );
})

export default router;