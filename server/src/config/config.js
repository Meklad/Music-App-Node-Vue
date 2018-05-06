module.exports = {
  // Backend Port: By default backend port = 8081 in local enviroment...
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'owllog',
    db_user: process.env.DB_USER || 'owllog',
    db_pass: process.env.DB_PASS || 'owllog',
    db_options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './owllog.sqlite',
      operatorsAliases: false
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret',
    tokenExpireDate: 60 * 60 * 24 * 7
  }
}
