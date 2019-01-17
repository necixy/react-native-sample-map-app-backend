var dotenv = require("dotenv");
dotenv.load();
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true })); // to support URL-encoded bodies
app.use(express.json()); // to support JSON-encoded bodies
require("./services/index");
require("./models/index");
require("./routes/index")(app);

// Instruct Express to pass on any request made to the '/graphql' route
// to the GraphQL instance.
const expressGraphQL = require("express-graphql");
const schema = require("./graphql/schema");
app.use(
  "/graphql",
  expressGraphQL(req => ({
    schema,
    graphiql: true,
    context: {}
  }))
);

module.exports = app;
