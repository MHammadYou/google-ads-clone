import { Router } from "express";


const router = Router();


router.get('/', (req, res) => {
  res.json({"msg": "/ route"});
})


export default router;