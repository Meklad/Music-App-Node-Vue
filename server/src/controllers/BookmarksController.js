const {Bookmark} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const {songId, userId} = req.query

      const bookmark = await Bookmark.findOne({
        where: {
          SongId: songId,
          UserId: userId
        }
      })
      res.send({
        success: 'Successfuly get songId',
        bookmark: bookmark || {}
      })
    } catch (err) {
      res.status(500).send({
        error: `Error Excption: ${err}`
      })
    }
  }
}
