const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: config.authentication.tokenExpireDate
  })
}

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      res.send({
        success: 200,
        message: 'Success',
        data: user
      })
    } catch (err) {
      res.status(400).send({
        error: 'This email account already in use...'
      })
    }
  },

  async login (req, res) {
    try {
      const {email, password} = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })

      if (!user) {
        return res.status(403).send({
          error: 'The login information is incorrect...'
        })
      }

      const isPasswordVaild = await user.comparePassword(password)
      console.log(isPasswordVaild)
      
      if (!isPasswordVaild) {
        return res.status(403).send({
          error: 'The login information is incorrect...'
        })
      }

      const userJson = user.toJSON()

      return res.send({
        success: 200,
        message: 'Success',
        data: userJson,
        token: jwtSignUser(userJson)
      })
    } catch (err) {
      console.log(err)      
      return res.status(500).send({
        error: 'An error has occured trying to login...'
      })
    }
  }
}
