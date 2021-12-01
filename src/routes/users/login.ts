import { Router } from "express";
const fs = require('fs').promises;


const router = Router();


router.get('/login', async (req, res) => {
  res.send( await fs.readFile('./public/login.html', 'utf-8') );
})

router.post('/login', (req, res) => {
  res.send("Post req on /login route");
})

export default router;