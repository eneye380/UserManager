var mongoose = require('mongoose');
mongoose.createConnection("mongodb://127.0.0.1:27017/admin", { useMongoClient: true });