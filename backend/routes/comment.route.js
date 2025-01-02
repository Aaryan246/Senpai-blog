import express from "express";

const router = express.Router();

router.get("/anothertest", (req, res) => {
  res.status(200).send("omg");
});

export default router;