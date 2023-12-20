const express = require("express");
const eventController = require("../controllers/eventController.js");
import authMiddleware from "../middlewares/auth.js";

const router = express.Router();

router
  .get("/event", authMiddleware, eventController.listEvent)
  .post("/event", authMiddleware, eventController.addEvent);

module.exports = router;
