const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  name: { type: String },
});

const image = mongoose.model("images", imageSchema);

module.exports = image;
