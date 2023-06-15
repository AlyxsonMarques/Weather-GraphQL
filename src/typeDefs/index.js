const { gql } = require("apollo-server");

module.exports = gql`
  type Location {
    name: String
    region: String
    country: String
    lat: Float
    lon: Float
  }

  type Condition {
    text: String
  }

  type Current {
    temp_c: Int
    temp_f: Float
    is_day: Boolean
    condition: Condition
    wind_mph: Float
    wind_kph: Float
    wind_degree: Int
    wind_dir: String
    humidity: Int
    cloud: Int
  }

  type Weather {
    location: Location
    current: Current
  }

  type Query {
    weather(city: String!): Weather
  }
`;
