const express = require("express");
const eventController = require("../controllers/eventController.js");
const authMiddleware = require("../middlewares/auth");

const router = express.Router();

router
  .get("/event", authMiddleware, eventController.listEvent)
  .post("/event", authMiddleware, eventController.addEvent);

module.exports = router;
