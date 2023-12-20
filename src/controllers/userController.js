const User = require("../models/User.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const secretKey = process.env.AUTH_SECRET;

class userController {
  static addUser = async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const user = new User({
        name,
        email,
        password,
      });
      await user.save();
      res.status(201).send({ message: "User successfully added" });
    } catch (err) {
      res.status(500).send({ message: err.message || "Error" });
    }
  };

  static listUsers = async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).send(users);
    } catch (err) {
      res.status(500).send({ message: err.message || "Error" });
    }
  };

  static listUserById = async (req, res) => {
    try {
      const id = req.params.id;
      const user = await User.findById(id);

      if (!user) {
        return res.status(404).send({ message: "User not found" });
      }

      res.status(200).send(user);
    } catch (err) {
      res.status(500).send({ message: err.message || "Error" });
    }
  };

  static updateUserById = async (req, res) => {
    try {
      const id = req.params.id;
      const updatedUser = await User.findByIdAndUpdate(
        id,
        { $set: req.body },
        { new: true }
      );

      if (!updatedUser) {
        return res.status(404).send({ message: "User not found" });
      }

      res.status(200).send({ message: "User successfully updated" });
    } catch (err) {
      res.status(500).send({ message: err.message || "Error" });
    }
  };

  static deleteUserById = async (req, res) => {
    try {
      const id = req.params.id;
      await User.findByIdAndDelete(id);

      res.status(200).send({ message: "User successfully deleted" });
    } catch (err) {
      res.status(500).send({ message: err.message || "Error" });
    }
  };

  static authUser = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email }).select("+password");

      if (!user) {
        return res.status(400).send({ message: "User not found" });
      }

      if (!(await bcrypt.compare(password, user.password))) {
        return res.status(400).send({ message: "Incorrect password" });
      }

      user.password = undefined;

      const token = jwt.sign({ id: user.id }, secretKey, {
        expiresIn: 86400,
      });

      res.send({ user, token });
    } catch (err) {
      res.status(500).send({ message: err.message || "Error" });
    }
  };
}

module.exports = userController;
