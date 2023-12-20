const user = require("../models/User.js");

class userController {
  static addUser = (req, res) => {
    const { name, email, password } = req.body;
    const users = new user({
      name,
      email,
      password,
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

  static listUserById = (req, res) => {
    const id = req.params.id;
    user.findById(id, (err, user) => {
      err
        ? res.status(400).send({
            message: `Unable to list user ${err}`,
          })
        : res.status(200).json(user);
    });
  };

  static updateUserById = (req, res) => {
    const id = req.params.id;
    user.findByIdAndUpdate(id, { $set: req.body }, (err, user) => {
      err
        ? res.status(400).send({
            message: `Unable to update user ${err}`,
          })
        : res.status(200).json({
            message: `User ${user.name} updated successfully`,
          });
    });
  };

  static deleteUserById = (req, res) => {
    const id = req.params.id;
    user.findByIdAndDelete(id, (err, user) => {
      err
        ? res.status(400).send({
            message: `Unable to delete user ${err}`,
          })
        : res.status(200).json({
            message: `User ${user.name} deleted successfully`,
          });
    });
  };

  static authUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");

    if (!user) return res.status(400).send({ message: "User not found" });
    if (!(await bcrypt.compare(password, user.password)))
      return res.status(400).send({ message: "Incorrect password" });
    user.password = undefined;
    const token = jwt.sign({ id: user.id }, authConfig.secret, {
      expiresIn: 86400,
    });
    res.send({ user, token });
  };

  static validateToken = async (req, res) => {
    const { authorization } = req.headers;
    if (authorization) {
      return res.status(200).send({ message: "Valid token" });
    }
    return res.status(401).send({ message: "Invalid token" });
  };
}

module.exports = userController;
