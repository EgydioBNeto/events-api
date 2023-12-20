const mongoose = require("mongoose");

const checkinSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const Checkin = mongoose.model("checkins", checkinSchema);

module.exports = Checkin;
