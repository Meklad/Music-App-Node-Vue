// Init routes || end points for the app...

// Define Backend Controllers...
const AuthenticationController = require('./controllers/AuthenticationController')

module.exports = (app) => {
  /**
   * Register Api
   * Description: this api handel the registraion requests...
   * @param object req [The upcomming request from frontend]
   * @param object res [The response from bakcend to frontend]
   * @returns json     [The User object...]
   */
  app.post('/register', AuthenticationController.register)
}
