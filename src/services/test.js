const api = require("./WeatherAPI.service");

async function test() {
  const data = await api.getWeather("Mogi das Cruzes");
  console.log(data);
}

test();
