require("dotenv").config();
const weatherModel = require("../models/openweatherModel");

const weatherInstance = new weatherModel();

exports.list = async (req, res) => {
    try {
        const response = await weatherInstance.getWeather({
            lat: -22.9107,
            lon: -43.3605,
            appid: process.env.API_KEY_WEATHER,
            units: "metric",
            lang: "pt_br",
        });

        res.json({
            response,
        });
    } catch (e) {
        console.log(e.response?.data);
        res.status(500).json(e);
    }
};
