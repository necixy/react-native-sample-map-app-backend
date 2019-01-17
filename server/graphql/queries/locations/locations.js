const graphql = require("graphql");
const { GraphQLList } = graphql;
const LocationType = require("../../types/location");
const locationService = require("../../../services/location");

module.exports = {
  type: new GraphQLList(LocationType),
  async resolve(parentValue, args, req) {
    return locationService.getLocations();
  }
};
