const graphql = require("graphql");
const { GraphQLID, GraphQLNonNull } = graphql;
const LocationType = require("../../types/location");
const locationService = require("../../../services/location");

module.exports = {
  description: "To get details of a particular location.",
  type: LocationType,
  args: {
    id: {
      type: GraphQLNonNull(GraphQLID)
    }
  },
  async resolve(parentValue, args, req) {
    return locationService.getLocation(args.id);
  }
};
