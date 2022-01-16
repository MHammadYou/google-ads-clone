import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
  res.send("Default route for ads");
})

router.post('/create', (req, res) => {
  res.send("create");
})

router.post('/update/id', (req, res) => {
  res.send("update route");
})

router.get('/delete/id', (req, res) => {
  res.send("Delete route");
})


export default router;
