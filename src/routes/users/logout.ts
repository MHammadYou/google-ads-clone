import { Router } from "express";

const router = Router();

router.get('/logout', async (req, res) => {
  const session: any = req.session;
  const user = session.user;

  if (!user) {
    res.redirect('/');
    return;
  }

  req.session.destroy(response => {});
  res.redirect("/");
})

export default router;