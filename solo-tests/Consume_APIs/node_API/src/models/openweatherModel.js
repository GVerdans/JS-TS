const axios = require("axios");
class WeatherAPI {
    async getWeather(params) {
        const response = await axios.get(
            "https://api.openweathermap.org/data/2.5/weather",
            { params },
        );

        return response.data;
    }
}

module.exports = WeatherAPI;
