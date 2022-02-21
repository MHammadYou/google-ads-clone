import { Router } from "express";

const router = Router();

router.get('/logout', async (req, res) => {
  res.send("Logout route");
})

export default router;