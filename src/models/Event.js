const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const events = mongoose.model("events", eventSchema);

module.exports = events;
