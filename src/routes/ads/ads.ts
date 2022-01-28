import { Router } from "express";

const router = Router();

router.get('/', async (req, res) => {
  res.render('ads/ads');
})

router.get('/id', async (req, res) => {
  res.render('ads/ads');
})

router.get('/create', async (req, res) => {
  res.render('ads/create-ad');
})

router.post('/create', async (req, res) => {
  res.send("You made a post request on create route");
})

router.get('/update/id', async (req, res) => {
  res.render('ads/update');
})

router.post('/update/id', async (req, res) => {
  res.send("You made a post request on update route");
})

router.get('/delete/id', (req, res) => {
  res.send("Delete route");
})


export default router;
