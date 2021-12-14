import { Router } from "express";

const router = Router();


router.get('/', (req, res) => {
  res.send('Content delivering route');
})

export default router;
