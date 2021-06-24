const Router = require("express");
const route = new Router();
const mainController = require("../Controllers/mainController");
const toolsController = require("../Controllers/toolsController");

route.get("/", mainController.Main);
route.get("/Tools/:id", toolsController.Main);

module.exports = route;
