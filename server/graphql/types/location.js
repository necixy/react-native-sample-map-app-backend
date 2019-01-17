const graphql = require("graphql");
const { GraphQLString, GraphQLID, GraphQLFloat, GraphQLObjectType } = graphql;

const LocationType = new GraphQLObjectType({
  name: "LocationType",
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    address: { type: GraphQLString },
    lat: { type: GraphQLFloat },
    lng: { type: GraphQLFloat }
  }
});

module.exports = LocationType;
