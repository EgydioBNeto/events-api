const express = require("express");
const userController = require("../controllers/userController.js");
const authMiddleware = require("../middlewares/auth");

const router = express.Router();

router
  .get("/user/:id", authMiddleware, userController.listUserById)
  .post("/user", userController.addUser)
  .put("/user/:id", authMiddleware, userController.updateUserById)
  .delete("/user/:id", authMiddleware, userController.deleteUserById)
  .post("/auth", userController.authUser)
  .get("/user", authMiddleware, userController.listUsers);

module.exports = router;
