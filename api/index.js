/* eslint-disable no-console */
const bodyParser = require('body-parser')
const app = require('express')()

app.use(bodyParser.json())

// Configuring the database
const { connect } = require('./config/db-handler')
connect()

// define a simple route
app.get('/', (req, res) => {
  res.json({
    message: 'api for Gateways application.',
  })
})

const deviceRoutes = require('./routes/deviceRoutes')
const gatewayRoutes = require('./routes/gatewayRoutes')

deviceRoutes(app)
gatewayRoutes(app)

module.exports = app
