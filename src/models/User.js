const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, lowercase: true, required: true },
  password: { type: String, required: true, select: false, minlength: 6 },
  createdAt: { type: Date, default: Date.now },
});

const users = mongoose.model("users", userSchema);

module.exports = users;
