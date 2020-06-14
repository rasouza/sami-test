'use strict'

const { remove } = require("winston")

exports = module.exports = (User, MongooseUser, errors) => {
  return {
    async find() {
      return MongooseUser.find()
    },
    async persist(user) {
      const { name, cpf, birthdate, subscription, dependents } = user
      const mongooseUser = new MongooseUser({ name, cpf, birthdate, subscription, dependents })
      await mongooseUser.save()
      return new User(
        mongooseUser.id,
        mongooseUser.name,
        mongooseUser.cpf,
        mongooseUser.birthdate,
        mongooseUser.subscription,
        mongooseUser.dependents
      );
    },
    async get(id) {
      try {
        const mongooseUser = await MongooseUser.findById(id)
        if (!mongooseUser) { throw new errors.NotFound() }

        return new User(
          mongooseUser.id,
          mongooseUser.name,
          mongooseUser.cpf,
          mongooseUser.birthdate,
          mongooseUser.subscription,
          mongooseUser.dependents
        );
      } catch (err) {
        if (err.name === "CastError") {
          throw new errors.NotFound();
        } else {
          throw err;
        }
      }
    },
    async merge(id, data) {
      try {
        const mongooseUser = await MongooseUser.findByIdAndUpdate(id, data, { new: true });
        console.log(mongooseUser.cpf);
        return new User(
          mongooseUser.id,
          mongooseUser.name,
          mongooseUser.cpf,
          mongooseUser.birthdate,
          mongooseUser.subscription,
          mongooseUser.dependents
        );
      } catch(err) {
        if (err.name === 'CastError') {
          throw new errors.NotFound();
        } else {
          throw err
        }
      }
    },

    async remove(id) {
      return await MongooseUser.findOneAndDelete({ _id: id })
    }
  }
}

exports['@require'] = ['domain/User', 'schemas/User', 'ports/http/errors']