const express = require("express");
const userController = require("../controllers/userController.js");
import authMiddleware from "../middlewares/auth.js";

const router = express.Router();

router
  .get("/user", authMiddleware, userController.listUser)
  .post("/user", userController.addUser);

module.exports = router;
