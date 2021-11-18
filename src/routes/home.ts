import { Router } from "express";
const fs = require('fs').promises;


const router = Router();


router.get('/', async (req, res) => {
  res.send( await fs.readFile('./public/index.html', 'utf-8') );
})


export default router;