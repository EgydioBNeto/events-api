const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const users = mongoose.model("users", userSchema);

module.exports = users;
