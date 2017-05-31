var MongoClient = require("mongodb").MongoClient;
MongoClient.connect("mongodb://localhost:27017/todo", function(err, connection){
  if (err) {
    console.log(err);
    return;
  };
  module.exports.db= connection;
});
