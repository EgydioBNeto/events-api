const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const Event = mongoose.model("events", eventSchema);

module.exports = Event;
