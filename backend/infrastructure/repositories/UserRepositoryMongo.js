'use strict'

const { mongo } = require("mongoose")

exports = module.exports = (User, MongooseUser) => {
  return {
    async find() {
      return await MongooseUser.find()
    },
    async persist(user) {
      const { name, cpf, birthdate, subscription, dependents } = user
      const mongooseUser = await new MongooseUser({ name, cpf, birthdate, subscription, dependents })
      await mongooseUser.save()
      return await new User(mongooseUser.id, mongooseUser.name, mongooseUser.cpf, mongooseUser.birthdate, mongooseUser.subscription, mongooseUser.dependents)
    }
  }
}

exports['@require'] = ['domain/User', 'schemas/User']