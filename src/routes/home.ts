import { Router } from "express";
import { readFile } from "fs/promises";

const router = Router();

router.get('/', async (req, res) => {
  res.send( await readFile('./public/index.html', 'utf-8') );
})


export default router;

