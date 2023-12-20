const express = require("express");
const userController = require("../controllers/userController.js");
const authMiddleware = require("../middlewares/auth");

const router = express.Router();

router
  .get("/user", authMiddleware, userController.listUser)
  .post("/user", userController.addUser);

module.exports = router;
