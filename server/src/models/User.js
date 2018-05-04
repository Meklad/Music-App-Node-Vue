module.exports = (sequelize, DataTypes) =>
  sequelize.define('User', {
    fullname: DataTypes.STRING,
    username: {
      type: DataTypes.STRING,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  })
