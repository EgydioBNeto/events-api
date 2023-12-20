const Image = require("../models/Image.js");
class imageController {
  static listImage = (req, res) => {
    Image.find()
      .then((images) => {
        res.status(200).send(images);
      })
      .catch((err) => {
        res.status(500).send({ message: err.message || "Error" });
      });
  };
}

module.exports = imageController;
