const express = require("express");
const imageController = require("../controllers/imageController.js");
import authMiddleware from "../middlewares/auth.js";

const router = express.Router();

router
  .get("/image", authMiddleware, imageController.listImage)
  .post("/image", authMiddleware, imageController.addImage);

module.exports = router;
