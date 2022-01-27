import { Router } from "express";
import { readFile } from "fs/promises";

const router = Router();

router.get('/', async (req, res) => {
  res.render("index");
})


export default router;

