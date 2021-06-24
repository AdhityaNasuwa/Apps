const Router = require("express");
const route = new Router();
const mainController = require("../Controllers/mainController");

route.get("/", mainController.Main);

module.exports = route;
