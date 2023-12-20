const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const connectionString = process.env.MONGODB_URL;

mongoose.connect(connectionString);

const db = mongoose.connection;

db.on("error", (err) => {
    console.error("MongoDB connection error:", err);
});

module.exports = db;
