const graphql = require("graphql");
const { GraphQLList } = graphql;
const LocationType = require("../../types/location");
const locationService = require("../../../services/location");

module.exports = {
  description: "To get list of all the locations from the database.",
  type: new GraphQLList(LocationType),
  async resolve(parentValue, args, req) {
    return locationService.getLocations();
  }
};
