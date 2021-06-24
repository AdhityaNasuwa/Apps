const Router = require("express");
const route = new Router();
const toolsController = require("../Controllers/toolsController");
route.get("/:id", toolsController.Main);

module.exports = route;
