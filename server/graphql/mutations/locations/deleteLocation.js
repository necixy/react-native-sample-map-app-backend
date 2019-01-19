const graphql = require("graphql");
const { GraphQLNonNull, GraphQLBoolean, GraphQLID } = graphql;
const LocationType = require("../../types/location");
const locationService = require("../../../services/location");

module.exports = {
  description: "To delete an existing location from the database.",
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
