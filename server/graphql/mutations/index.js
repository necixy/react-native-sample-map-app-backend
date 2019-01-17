const graphql = require("graphql");
const { GraphQLObjectType } = graphql;
const addLocation = require("./locations/addLocation");
const updateLocation = require("./locations/updateLocation");
const deleteLocation = require("./locations/deleteLocation");

const mutation = new GraphQLObjectType({
  name: "Mutations",
  fields: {
    addLocation,
    updateLocation,
    deleteLocation
  }
});

module.exports = mutation;
