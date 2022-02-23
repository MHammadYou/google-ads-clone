import { Router } from "express";

const router = Router();

router.get('/', async (req, res) => {
  const data = {
    title: "Ads",
    dir: ".."
  }
  res.render('ads/ads', data);
})

router.get('/:id', async (req, res) => {
  const data = {
    title: "Ads/id",
    dir: "..",
    id: req.params.id
  }
  res.render('ads/ads', data);
})

router.get('/create', async (req, res) => {
  const data = {
    title: "Create ad",
    dir: "..",
  }
  res.render('ads/create-ad', data);
})

router.post('/create', async (req, res) => {
  res.send("You made a post request on create route");
})

router.get('/update/:id', async (req, res) => {
  const data = {
    title: "Update ad",
    dir: "../..",
    id: req.params.id
  }
  res.render('ads/update', data);
})

router.post('/update/:id', async (req, res) => {
  res.send("You made a post request on update route");
})

router.get('/delete/:id', (req, res) => {
  res.send("Delete route");
})


export default router;
