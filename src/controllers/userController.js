const User = require("../models/User.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const secretKey = process.env.AUTH_SECRET;

class userController {
  static addUser = (req, res) => {
    const { name, email, password } = req.body;
    const user = new User({
      name,
      email,
      password,
    });
    user
      .save()
      .then(() => {
        res.status(201).send({ message: "User successfully added" });
      })
      .catch((err) => {
        res.status(500).send({ message: err.message || "Error" });
      });
  };

  static listUser = (req, res) => {
    User.find()
      .then((users) => {
        res.status(200).send(users);
      })
      .catch((err) => {
        res.status(500).send({ message: err.message || "Error" });
      });
  };

  static listUserById = (req, res) => {
    const id = req.params.id;
    User.findById(id)
      .then((user) => {
        res.status(200).send(user);
      })
      .catch((err) => {
        res.status(500).send({ message: err.message || "Error" });
      });
  };

  static updateUserById = (req, res) => {
    const id = req.params.id;
    User.findByIdAndUpdate(id, { $set: req.body })
      .then((user) => {
        res.status(200).send({ message: "User successfully updated" });
      })
      .catch((err) => {
        res.status(500).send({ message: err.message || "Error" });
      });
  };

  static deleteUserById = (req, res) => {
    const id = req.params.id;
    User.findByIdAndDelete(id)
      .then((user) => {
        res.status(200).send({ message: "User successfully deleted" });
      })
      .catch((err) => {
        res.status(500).send({ message: err.message || "Error" });
      });
  };

  static authUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");

    if (!user) return res.status(400).send({ message: "User not found" });
    if (!(await bcrypt.compare(password, user.password)))
      return res.status(400).send({ message: "Incorrect password" });
    user.password = undefined;
    const token = jwt.sign({ id: user.id }, secretKey, {
      expiresIn: 86400,
    });
    res.send({ user, token });
  };
}

module.exports = userController;
