'use strict'

exports = module.exports = UsersController => ([
  {
    method: 'get',
    path: '/users',
    handler: UsersController.listUsers
  }
])

exports["@singleton"] = true;
exports["@require"] = ['ports/http/UsersController'];