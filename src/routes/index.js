const express = require("express");
const event = require("./eventRoutes.js");

const routes = (app) => {
    app.route("/").get((req, res) => {
    res.status(200).send({ message: "Events API" });
    });
    app.use(express.json(), event);
};

module.exports = routes;
