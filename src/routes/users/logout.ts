import { Router } from "express";

const router = Router();

router.get('/logout', async (req, res) => {
  req.session.destroy(response => {
    console.log(response)
  });
  res.redirect("/");
})

export default router;