const express = require("express");
const route = express.Router();

const controllerKitsu = require("../controller/controllerKitsu");

route.get("/kitsu", controllerKitsu.index);

module.exports = route;
