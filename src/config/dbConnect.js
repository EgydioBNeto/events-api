const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const connectionString = 'mongodb+srv://devuser:SN3PT1SjUB26gAf3@events-cluster-databse.whfyy33.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(connectionString);

const db = mongoose.connection;

db.on("error", (err) => {
    console.error("MongoDB connection error:", err);
});

module.exports = db;
