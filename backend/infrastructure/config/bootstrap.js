'use strict'

const IoC = require('electrolyte')

module.exports = {
  async init () {
    // put your initializer here...
  },

  async registerProviders () {
    const container = await IoC.create('container')

    if (process.env.DB_DRIVER === 'mongo') {
      container.database = await IoC.create('infrastructure/database/mongo')
      container.userRepository = await IoC.create('infrastructure/repositories/UserRepositoryMongo')
    }
  },

  async createServer () {
    const server = await IoC.create('infrastructure/webserver/server')

    server.listen(8080, () => {
      console.log(`${server.name} listening at ${server.url}`)
    })
  }
}

exports['@singleton'] = true
