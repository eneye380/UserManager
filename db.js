var mongoose = require('mongoose');
mongoose.createConnection("mongodb://john:doe@localhost:27017/databaseName", { useMongoClient: true });