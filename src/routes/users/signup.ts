import { Router } from "express";
const fs = require('fs').promises;


const router = Router();


router.get('/signup', async (req, res) => {
  res.send( await fs.readFile('./public/signup.html', 'utf-8') );
})

router.post('/signup', (req, res) => {
  res.send("Post req on signup route")
})

export default router;
