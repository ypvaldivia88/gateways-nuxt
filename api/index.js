/* eslint-disable no-console */
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

require('./config/db-handler')
const server = app.listen(4000)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Configuring the database
const dbConfig = require('./config/db-handler')
dbConfig.connect()

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

module.exports = { app, server }
