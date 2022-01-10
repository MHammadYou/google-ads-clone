import { Router } from "express";

const router = Router();

router.get('/create', (req, res) => {
  res.send("create");
})


export default router;
