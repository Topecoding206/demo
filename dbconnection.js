const mongooseDb = require("mongoose");
mongooseDb.set("strictQuery", true);
// Create the database connection
exports.connectToMongoDB = async (url) => {
  return mongooseDb.connect(url);
};
