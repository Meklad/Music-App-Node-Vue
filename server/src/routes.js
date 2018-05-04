// Init routes || end points for the app...
module.exports = (app) => {
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
}
