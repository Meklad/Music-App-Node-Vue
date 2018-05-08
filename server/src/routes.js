// Init routes || end points for the app...

// Define Backend Controllers...
const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsController = require('./controllers/SongsController')

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

  /**
   * Get All Songs Api
   * Description: this api return all songs to the front end
   * @param object req [The upcomming request from frontend]
   * @param object res [The response from bakcend to frontend]
   * @returns json     [The User object...]
   */
  app.get('/songs',
    SongsController.index
  )

  /**
   * Create new song Api
   * Description: this api create new song and insetr it to database
   * @param object req [The upcomming request from frontend]
   * @param object res [The response from bakcend to frontend]
   * @returns json     [The User object...]
   */
  app.post('/songs/post',
    SongsController.post
  )

  /**
   * Return a song using songId
   * Description: this api return song using song id.
   * @param object req [The upcomming request from frontend]
   * @param object res [The response from bakcend to frontend]
   * @returns json     [The User object...]
   */
  app.get('/songs/:songId',
    SongsController.show
  )

  /**
   * Return a song using songId
   * Description: this api return song using song id.
   * @param object req [The upcomming request from frontend]
   * @param object res [The response from bakcend to frontend]
   * @returns json     [The User object...]
   */
  app.put('/songs/:songId',
    SongsController.put
  )
}
