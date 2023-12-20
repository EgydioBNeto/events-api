const express = require("express");
const event = require("./eventRoutes.js");
const user = require("./userRoutes.js");
const image = require("./imageRoutes.js");
const checkin = require("./checkinRoutes.js");

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ message: "Events API" });
  });
  app.use(express.json(), event, user, image, checkin);
};

module.exports = routes;
