const mongoose = require("mongoose");

const checkinSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const checkins = mongoose.model("checkins", checkinSchema);

module.exports = checkins;
