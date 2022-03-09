import { Router } from "express";

const router = Router();

router.get('/logout', async (req, res) => {
  const data = {

  } 
  req.session.destroy(response => {
    console.log(response)
  });
  res.send("You made a get request on /logout")
})

export default router;