import { Router } from "express";

const router = Router();

router.post('/create', (req, res) => {
  res.send("create");
})

router.get('/ads', (req, res) => {
  res.send("")
})


export default router;
