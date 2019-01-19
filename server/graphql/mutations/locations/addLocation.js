const graphql = require("graphql");
const { GraphQLString, GraphQLNonNull, GraphQLFloat } = graphql;
const LocationType = require("../../types/location");
const locationService = require("../../../services/location");

module.exports = {
  description: "To add a new location into the database.",
  type: LocationType,
  args: {
    name: {
      type: GraphQLNonNull(GraphQLString)
    },
    address: {
      type: GraphQLNonNull(GraphQLString)
    },
    lat: {
      type: GraphQLNonNull(GraphQLFloat)
    },
    lng: {
      type: GraphQLNonNull(GraphQLFloat)
    }
  },
  async resolve(parentValue, args, req) {
    return locationService.addLocation(args);
  }
};
