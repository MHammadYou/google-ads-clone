import { Router } from "express";
import { getFlashMsg } from "../util";

const router = Router();

router.get('/', async (req, res) => {
  const session: any = req.session;
  const user = session.user;
  const data = {
    title: "Ads Platform",
    dir: ".",
    user,
    ...getFlashMsg(req)
  }

  res.render("index", data);
})

export default router;


