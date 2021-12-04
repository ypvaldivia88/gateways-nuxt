const mongoose = require('mongoose')

/**
 * Connect to the in-memory database.
 */
module.exports.connect = async () => {
  await mongoose.connect(
    'mongodb+srv://gateways:j97FSwXKJ7phEDaX@gateways.imdyw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
      dbName: 'musula',
      useNewUrlParser: true,
    }
  )
}

/**
 * Drop database, close the connection and stop mongod.
 */
module.exports.closeDatabase = async () => {
  await mongoose.disconnect()
}

/**
 * Remove all the data for all db collections.
 */
module.exports.clearDatabase = async () => {
  const collections = mongoose.connection.collections

  for (const key in collections) {
    const collection = collections[key]
    await collection.deleteMany()
  }
}
