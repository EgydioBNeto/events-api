const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  name: { type: String },
});

const Image = mongoose.model("images", imageSchema);

module.exports = Image;
