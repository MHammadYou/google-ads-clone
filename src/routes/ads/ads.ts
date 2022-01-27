import { Router } from "express";
import { readFile } from "fs/promises";

const router = Router();

router.get('/', async (req, res) => {
  res.send( await readFile('./public/ads/ads.ejs', 'utf-8') );
})

router.get('/id', async (req, res) => {
  res.send( await readFile("./public/ads/ads.ejs", 'utf-8') );
})

router.post('/create', async (req, res) => {
  res.send( await readFile('./public/ads/create-ad.ejs', 'utf-8') );
})

router.post('/update/id', async (req, res) => {
  res.send( await readFile("./public/ads/update.ejs", "utf-8") );
})

router.get('/delete/id', (req, res) => {
  res.send("Delete route");
})


export default router;
