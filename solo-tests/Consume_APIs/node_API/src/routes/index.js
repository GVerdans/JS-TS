const express = require("express");
const route = express.Router();

const kitsuRoute = require("./KitsuAPIRoutes");
const weatherRoute = require("./openweatherRoutes");

route.get("/kitsu", kitsuRoute);
route.get("/weather", weatherRoute);

module.exports = route;
