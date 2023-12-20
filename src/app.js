const dotenv = require("dotenv");
const express = require("express");
const morgan = require("morgan");
const db = require("./config/dbConnect.js");
const routes = require("./routes/index.js");

dotenv.config();

db.on(
  "error",
  console.log.bind(console, "Error establishing connection to the database!")
);
db.once("open", () => {
  console.log("Connection to the database successfully established!");
});

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

routes(app);

module.exports = app;
