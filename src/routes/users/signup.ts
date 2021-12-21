import { Router } from "express";
const fs = require('fs').promises;

const router = Router();


router.get('/signup', async (req, res) => {
  res.send( await fs.readFile('./public/users/signup.html', 'utf-8') );
})

router.post('/signup', async(req, res) => {
  res.send("Post req on signup route")
})

export default router;
