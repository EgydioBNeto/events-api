const Checkin = require("../models/Checkin.js");

class checkinController {
  static addCheckin = (req, res) => {
    const { name } = req.body;
    const checkin = new Checkin({
      name,
    });
    checkin
      .save()
      .then(() => {
        res.status(201).send({ message: "Checkin successfully added" });
      })
      .catch((err) => {
        res.status(500).send({ message: err.message || "Error" });
      });
  };
  static listCheckin = (req, res) => {
    Checkin.find()
      .then((checkins) => {
        res.status(200).send(checkins);
      })
      .catch((err) => {
        res.status(500).send({ message: err.message || "Error" });
      });
  };
}

module.exports = checkinController;
