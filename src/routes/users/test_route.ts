import { Router } from "express";
import TestModel from "../../models/test";

const router = Router();


router.get('/test', (req, res) => {
  const test = new TestModel({field: "field"});
  test.save()
    .then(response => {
      res.send(response);
    })
    .catch(error => {
      res.send(error);
    })
  // res.send("Working");
})

export default router;