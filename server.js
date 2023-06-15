const { ApolloServer } = require("apollo-server");
const { createClient } = require("redis");
const redisClient = createClient();

const WeatherAPIService = require("./src/services/WeatherAPI.service");

const typeDefs = require("./src/typeDefs");
const resolvers = require("./src/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    redisClient,
    WeatherAPIService,
  }),
});

server.listen().then(({ url }) => {
  redisClient.connect();
  console.log(`Listening on ${url}`);
});
