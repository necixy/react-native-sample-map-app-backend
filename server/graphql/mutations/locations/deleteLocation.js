const graphql = require("graphql");
const { GraphQLNonNull, GraphQLBoolean, GraphQLID } = graphql;
const LocationType = require("../../types/location");
const locationService = require("../../../services/location");

module.exports = {
  type: GraphQLBoolean,
  args: {
    id: {
      type: GraphQLNonNull(GraphQLID)
    }
  },
  async resolve(parentValue, args, req) {
    return locationService.deleteLocation(args.id);
  }
};
