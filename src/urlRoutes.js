const express = require('express');
const route = express.Router();
const userController = require("./urlController");
route.post("/shortUrl", userController.createShortUrl);
route.get("/getshortUrls", userController.getShortUrls);
route.get("/:shortUrl", userController.redirectShortUrl);
module.exports = route;