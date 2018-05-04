const {User} = require('../models')

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      res.send({
        success: 200,
        data: user
      })
    } catch (err) {
      res.status(400).send({
        error: 'This email account already in use...'
      })
    }
  }
}
