// Message shows that the server is started to work without errors.
console.log('Server is run...')

// Import some libs...
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config')

// Bulid the server
const app = express()
// Create app request logger middleware...
app.use(morgan('combined'))
// Using body-parser alloed to us to Parse incoming request bodies in a middleware before your handlers...
app.use(bodyParser.json())
// CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
app.use(cors())

// Backend Routes...
require('./routes')(app)

sequelize.sync()
  .then(() => {
    // Server will start to listen the upcomming requests...
    app.listen(config.port)

    // Return message when the server start...
    console.log(`Server start on port: ${config.port}`)
  })
