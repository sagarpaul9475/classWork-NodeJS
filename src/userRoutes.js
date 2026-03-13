const express = require('express');
const route = express.Router();
const userController = require("./userController");
route.get("/get/users", userController.getUsers);
route.get("/get/users/:id",userController.getUserById);
module.exports = route;