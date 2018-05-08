const {Song} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const songs = await Song.findAll({
        limit: 10
      })
      res.send({
        status: 200,
        songs
      })
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to get the songs...'
      })
    }
  },
  async post (req, res) {
    try {
      const song = await Song.create(req.body)
      res.send({
        status: 200,
        song
      })
    } catch (err) {
      res.status(400).send({
        error: 'An error has occured trying to create a song...'
      })
    }
  },

  async show (req, res) {
    try {
      const song = await Song.findById(req.params.songId)
      res.send({
        status: 200,
        song
      })
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to get the this song...'
      })
    }
  }
}
