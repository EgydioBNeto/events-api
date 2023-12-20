const express = require("express");
const imageController = require("../controllers/imageController.js");
const authMiddleware = require("../middlewares/auth");
const multer = require("multer");
const multerConfig = require("../config/multer.js");

const router = express.Router();

// TODO - FIX THE UPLOAD IMAGE ROUTE

router
  .get("/image", authMiddleware, imageController.listImage)
  .post(
    "/image",
    authMiddleware,
    multer(multerConfig).single("file"),
    async (req, res) => {
      console.log(req.file);
      res.json({ message: "ok" });
    }
  );

module.exports = router;
