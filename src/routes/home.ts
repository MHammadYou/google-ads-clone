import { Router } from "express";

const router = Router();

router.get('/', async (req, res) => {
  const session: any = req.session;
  const user = session.user;
  const data = {
    title: "Ads Platform",
    dir: ".",
    user,
  }
  res.render("index", data);
})

export default router;

