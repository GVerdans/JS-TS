require("dotenv").config();
const weatherModel = require("../models/openweatherModel");

const weatherInstance = new weatherModel();

exports.list = async (req, res) => {
    try {
        const response = await weatherInstance.getWeather({
            q: "brazil,br",
            lat: "-22.91",
            long: "-43.36",
            appid: process.env.API_KEY_WEATHER,
            units: "metric",
            lang: "pt_br",
        });

        res.json({
            response,
        });
    } catch (e) {
        res.status(500).json(e);
    }
};
