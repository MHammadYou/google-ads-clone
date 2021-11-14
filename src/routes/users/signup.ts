import { Router } from "express";


const router = Router();


router.get('/signup', (req, res) => {
  res.json({"route": "/signup"})
})

export default router;