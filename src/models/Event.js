const mongoose = require("mongoose");

const eventsSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const events = mongoose.model("events", eventsSchema);

module.exports = events;
