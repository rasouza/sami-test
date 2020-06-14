'use strict'

exports = module.exports = (errors, ListUsers, CreateUser, GetUser) => {
  return {
    async listUsers(req, res, next) {
      try {
        const users = await ListUsers()
        res.send(users)
      } catch (err) {
        next(err)
      }
    },
    async createUser(req, res, next) {
      const { name, cpf, birthdate, subscription, dependents } = req.body
      try {
        const user = await CreateUser(name, cpf, birthdate, subscription, dependents)
        res.send(user)
      } catch(err) {
        next(err)
      }
    },
    async findUser(req, res, next) {
      try {
        const user = await GetUser(req.params.id)
        res.send(user)
      } catch (err) {
        if (err.message === 'NotFound') { next(new errors.NotFoundError) }
      }
    },
    async updateUser(req, res, next) {},
    async deleteUser(req, res, next) {},
  };
}

exports["@require"] = [
  'restify-errors',
  'application/use_cases/ListUsers', 
  'application/use_cases/CreateUser',
  'application/use_cases/GetUser'
];
