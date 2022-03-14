import { Router } from "express";

const router = Router();

router.get('/delete/:id', (req, res) => {
  const session: any = req.session;
  const user = session.user;

  if (!user) {
    res.redirect('/users/login');
    return;
  }
  res.send("Delete route");
})


export default router;
