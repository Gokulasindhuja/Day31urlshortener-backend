const mongoose = require("mongoose");

const dbUri = "mongodb://localhost:27017/urlShortener";

mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;

module.exports = connection;
