'use strict'

exports = module.exports = ListUsers => {
  return {
    async listUsers(req, res, next) {
      const users = await ListUsers()
      res.send(users)
    },
    async findUser(req, res, next) {},
    async updateUser(req, res, next) {},
    async deleteUser(req, res, next) {},
  };
}

exports["@require"] = ['application/use_cases/ListUsers'];
