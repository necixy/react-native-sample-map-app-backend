const graphql = require("graphql");
const { GraphQLString, GraphQLNonNull, GraphQLFloat, GraphQLID } = graphql;
const LocationType = require("../../types/location");
const locationService = require("../../../services/location");

module.exports = {
  type: LocationType,
  args: {
    id: {
      type: GraphQLNonNull(GraphQLID)
    },
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
    return locationService.updateLocation(args);
  }
};