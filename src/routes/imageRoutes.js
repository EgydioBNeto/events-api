const express = require("express");
const imageController = require("../controllers/imageController.js");
const authMiddleware = require("../middlewares/auth");

const router = express.Router();

router
  .get("/image", authMiddleware, imageController.listImage)
  .post("/image", authMiddleware, imageController.addImage);

module.exports = router;
