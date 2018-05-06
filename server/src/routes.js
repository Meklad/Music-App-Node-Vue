// Init routes || end points for the app...

// Define Backend Controllers...
const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
  /**
   * Register Api
   * Description: this api handel the registraion requests...
   * @param object req [The upcomming request from frontend]
   * @param object res [The response from bakcend to frontend]
   * @returns json     [The User object...]
   */
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register
  )

  /**
   * Register Api
   * Description: this api handel the registraion requests...
   * @param object req [The upcomming request from frontend]
   * @param object res [The response from bakcend to frontend]
   * @returns json     [The User object...]
   */
  app.post('/login',
    AuthenticationControllerPolicy.login,
    AuthenticationController.login
  )
}
