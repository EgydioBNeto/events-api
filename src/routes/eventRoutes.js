const express = require("express");
const eventController = require("../controllers/eventController.js");

const router = express.Router();

router
    .get("/event", eventController.eventList)
    .post("/event", eventController.addevent)

module.exports = router;
