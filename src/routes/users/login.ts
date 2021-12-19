import { Router } from "express";
const fs = require('fs').promises;
import { UsersModel } from "../../models";


const router = Router();


router.get('/login', async (req, res) => {
  res.send( await fs.readFile('./public/users/login.html', 'utf-8') );
})

router.post('/login', async (req, res) => {
  res.send("Post req on /login route");
})

export default router;