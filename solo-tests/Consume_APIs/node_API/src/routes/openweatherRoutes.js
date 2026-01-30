const express = require("express");
const route = express.Router();

const controllerWeather = require("../controller/openweatherController");

route.get("/weather", controllerWeather.list);

module.exports = route;
