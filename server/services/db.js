const mongoose = require("mongoose");
const KEYS = require("../config/keys");

mongoose.connect(
  KEYS.MONGO_URI,
  { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false }
);
