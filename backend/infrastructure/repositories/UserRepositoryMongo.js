'use strict'

exports = module.exports = (User, MongooseUser) => {
  return {
    async find() {
      return await MongooseUser.find()
    }
  }
}

exports['@require'] = ['domain/User', 'schemas/User']