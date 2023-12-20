const user = require("../models/User.js");

class userController {
  static addUser = (req, res) => {
    const { name } = req.body;
    const users = new user({
      name,
    });
    users
      .save()
      .then(() => {
        res.status(201).send({ message: "User successfully added" });
      })
      .catch((err) => {
        res.status(500).send({ message: err.message || "Error" });
      });
  };
  static listUser = (req, res) => {
    user
      .find()
      .then((users) => {
        res.status(200).send(users);
      })
      .catch((err) => {
        res.status(500).send({ message: err.message || "Error" });
      });
  };
}

module.exports = userController;
