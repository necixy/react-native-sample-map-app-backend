const graphql = require("graphql");
const { GraphQLObjectType } = graphql;
const locations = require("./locations/locations");
const location = require("./locations/location");

const RootQueryType = new GraphQLObjectType({
  name: "Queries",
  fields: {
    locations,
    location
  }
});

module.exports = RootQueryType;
