var dotenv = require("dotenv");
dotenv.load();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: true })); // to support URL-encoded bodies
app.use(express.json()); // to support JSON-encoded bodies
require("./services/index");
require("./models/index");
require("./routes/index")(app);

// Instruct Express to pass on any request made to the graphql route
// to the GraphQL instance.
const expressGraphQL = require("express-graphql");
const schema = require("./graphql/schema");
let server;
app.use(
  `/${process.env.GRAPHQL_ROUTE}`,
  expressGraphQL(req => ({
    schema,
    graphiql: true,
    context: {}
  }))
);

function startServer(params) {
  const PORT = process.env.PORT;
  server = app.listen(PORT, () => {});
  return server;
}

function stopServer() {
  mongoose.disconnect();
  server.close();
}

module.exports = { startServer, stopServer };
