'use strict'

exports = module.exports = (ListUsers, CreateUser) => {
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
    async findUser(req, res, next) {},
    async updateUser(req, res, next) {},
    async deleteUser(req, res, next) {},
  };
}

exports["@require"] = [
  'application/use_cases/ListUsers', 
  'application/use_cases/CreateUser'
];
