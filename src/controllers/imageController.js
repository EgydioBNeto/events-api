const Image = require("../models/Image.js");

class imageController {
  static addImage = (req, res) => {
    const { name } = req.body;
    const image = new Image({
      name,
    });
    image
      .save()
      .then(() => {
        res.status(201).send({ message: "Image successfully added" });
      })
      .catch((err) => {
        res.status(500).send({ message: err.message || "Error" });
      });
  };
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
