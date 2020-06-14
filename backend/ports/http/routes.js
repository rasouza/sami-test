'use strict'

const User = require("../../infrastructure/database/schemas/User");

exports = module.exports = UsersController => ([
  {
    method: 'get',
    path: '/users',
    handler: UsersController.listUsers
  },
  {
    method: 'post',
    path: '/users',
    handler: UsersController.createUser
  },
  {
    method: 'get',
    path: '/users/:id',
    handler: UsersController.findUser
  },
  {
    method: 'patch',
    path: '/users/:id',
    handler: UsersController.updateUser
  },
  {
    method: 'del',
    path: '/users/:id',
    handler: UsersController.deleteUser
  }
])

exports["@singleton"] = true;
exports["@require"] = ['ports/http/UsersController'];