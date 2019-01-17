const graphql = require("graphql");
const { GraphQLSchema } = graphql;

const queries = require("./queries/index");
const mutations = require("./mutations/index");

module.exports = new GraphQLSchema({
  query: queries,
  mutation: mutations
});
