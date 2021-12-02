const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

/**
 * Connect to the in-memory database.
 */
module.exports.connect = async () => {
  const mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri(), {
    dbName: "musula",
    useNewUrlParser: true,
  });
};

/**
 * Drop database, close the connection and stop mongod.
 */
module.exports.closeDatabase = async () => {
  await mongoose.disconnect();
};

/**
 * Remove all the data for all db collections.
 */
module.exports.clearDatabase = async () => {
  const collections = mongoose.connection.collections;

  for (const key in collections) {
    const collection = collections[key];
    await collection.deleteMany();
  }
};
