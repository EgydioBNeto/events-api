const express = require("express");
const checkinController = require("../controllers/checkinController.js");
const authMiddleware = require("../middlewares/auth");

const router = express.Router();

router
  .get("/checkin", authMiddleware, checkinController.listCheckin)
  .post("/checkin", authMiddleware, checkinController.addCheckin);

module.exports = router;
