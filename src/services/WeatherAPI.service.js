const dotenv = require("dotenv").config();
const axios = require("axios");

class WeatherAPIService {
  constructor() {
    this.baseURL = "http://api.weatherapi.com";
  }

  async getWeather(cityName) {
    const cityNameEncoded = cityName.replaceAll(" ", "%20");
    const { data } = await axios.get(
      this.baseURL +
        `/v1/current.json?key=${process.env.Weather_API}&q=${cityNameEncoded}&aqi=yes`
    );

    return data;
  }
}

module.exports = new WeatherAPIService();
