const express = require("express");
const checkinController = require("../controllers/checkinController.js");
import authMiddleware from "../middlewares/auth.js";

const router = express.Router();

router
  .get("/checkin", authMiddleware, checkinController.listCheckin)
  .post("/checkin", authMiddleware, checkinController.addCheckin);

module.exports = router;
