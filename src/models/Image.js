const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  name: { type: String },
  image: { type: String },
  url: { type: String },
  banner: { type: Boolean, default: false },
  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "events",
    required: false,
  },
});

const Image = mongoose.model("images", imageSchema);

module.exports = Image;
