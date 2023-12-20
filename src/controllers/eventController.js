const event = require("../models/Event.js");

class eventController {
  static addevent = (req, res) => {
    const { name } = req.body;
    const events = new event({
      name
    });
  };
  static eventList = (req, res) => {
    event
      .find()
      .then((events) => {
        res.status(200).send(events);
      })
      .catch((err) => {
        res.status(500).send({ message: err.message || "Error" });
      });
  };

}

module.exports = eventController;
