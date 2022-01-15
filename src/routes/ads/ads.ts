import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
  res.send("Default route for ads");
})

router.post('/create', (req, res) => {
  res.send("create");
})

router.post('/update', (req, res) => {
  res.send("update route");
})


export default router;
