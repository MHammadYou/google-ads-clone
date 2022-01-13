import { Router } from "express";

const router = Router();

router.post('/create', (req, res) => {
  res.send("create");
})

router.get('/', (req, res) => {
  res.send("")
})


export default router;
