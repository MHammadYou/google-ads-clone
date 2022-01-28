import { Router } from "express";

const router = Router();

router.get('/', async (req, res) => {
  const data = {
    title: "Ads Platform"
  }
  res.render("index", data);
})

export default router;

