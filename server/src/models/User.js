module.exports = (sequelize, DataTypes) =>
  sequelize.define('User', {
    fullname: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true
    }
  })
