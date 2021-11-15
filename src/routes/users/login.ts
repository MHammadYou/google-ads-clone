import { Router } from "express";


const router = Router();


router.get('/login', (req, res) => {
  res.json({"route": "/login"})
})

export default router;