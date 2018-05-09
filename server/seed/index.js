const {
  sequelize,
  User,
  Song
} = require('../src/models')
const Promise = require('bluebird')

const songs = require('./seeds/songs.json')
const users = require('./seeds/users.json')

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
  })
