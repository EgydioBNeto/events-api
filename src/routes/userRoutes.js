const express = require("express");
const userController = require("../controllers/userController.js");
const authMiddleware = require("../middlewares/auth");

const router = express.Router();

router
  .get("/user", authMiddleware, userController.listUser)
  .post("/user", userController.addUser)
  .get("/user/:id", authMiddleware, userController.listUserById)
  .put("/user/:id", authMiddleware, userController.updateUserById)
  .delete("/user/:id", authMiddleware, userController.deleteUserById)
  .post("/auth", userController.authUser)
  .post("/token", userController.validateToken);

module.exports = router;
