// Message shows that the server is started to work without errors.
console.log('Server is run...')

// Import some libs...
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

// Bulid the server
const app = express()
// Create app request logger middleware...
app.use(morgan('combined'))
// Using body-parser alloed to us to Parse incoming request bodies in a middleware before your handlers...
app.use(bodyParser.json())
// CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
app.use(cors())

// Init routes || end points for the app...

// Landing page route...
app.get('/', (req, res) => {
  return res.send({
    message: 'Start Backend...'
  })
})

/**
 * Register Api
 * Description: this api handel the registraion requests...
 * @param object req [The upcomming request from frontend]
 * @param object res [The response from bakcend to frontend]
 * @returns json     [The User object...]
 */
app.post('/register', (req, res) => {
  res.send({
    message: `Hello ${req.body.username}, you are registered successfuly...`,
    status: 200,
    data: {
      fullname: req.body.fullname,
      username: req.body.username,
      email: req.body.email
    }
  })
})

// Server will start to listen the upcomming requests...
app.listen(process.env.PORT || 8081)
