const {
  sequelize,
  User,
  Song,
  Bookmark
} = require('../src/models')
const Promise = require('bluebird')

const songs = require('./seeds/songs.json')
const users = require('./seeds/users.json')
const bookmarks = require('./seeds/bookmarks.json')
console.log(bookmarks)
sequelize.sync({force: true})
  .then(async function () {
    await Promise.all(
      users.map(user => {
        User.create(user)
      })
    )

    await Promise.all(
      songs.map(song => {
        Song.create(song)
      })
    )

    await Promise.all(
      bookmarks.map(bookmark => {
        Bookmark.create(bookmark)
      })
    )
  })
