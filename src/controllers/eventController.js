const Event = require("../models/Event.js");

class eventController {
  static addEvent = (req, res) => {
    const { name } = req.body;
    const event = new Event({
      name,
    });
    event
      .save()
      .then(() => {
        res.status(201).send({ message: "Event successfully added" });
      })
      .catch((err) => {
        res.status(500).send({ message: err.message || "Error" });
      });
  };
  static listEvent = (req, res) => {
    Event.find()
      .then((events) => {
        res.status(200).send(events);
      })
      .catch((err) => {
        res.status(500).send({ message: err.message || "Error" });
      });
  };
}

module.exports = eventController;
