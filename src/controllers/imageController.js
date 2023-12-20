const image = require("../models/image.js");

class imageController {
  static addImage = (req, res) => {
    const { name } = req.body;
    const images = new image({
      name,
    });
    images
      .save()
      .then(() => {
        res.status(201).send({ message: "Image successfully added" });
      })
      .catch((err) => {
        res.status(500).send({ message: err.message || "Error" });
      });
  };
  static listImage = (req, res) => {
    image
      .find()
      .then((images) => {
        res.status(200).send(images);
      })
      .catch((err) => {
        res.status(500).send({ message: err.message || "Error" });
      });
  };
}

module.exports = imageController;
