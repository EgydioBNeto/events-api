const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  name: { type: String },
});

const images = mongoose.model("images", imageSchema);

module.exports = images;
