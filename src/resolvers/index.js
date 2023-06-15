module.exports = {
  Query: {
    async weather(_, { city }, { dataSources }) {
      const cachedData = await dataSources.redisClient.get(city);
      if (cachedData) {
        return cachedData;
      }

      const weatherData = await dataSources.WeatherAPIService.getWeather(city);
      await dataSources.redisClient.set(city, JSON.stringify(weatherData));
      return weatherData;
    },
  },
};
