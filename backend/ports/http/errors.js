'use strict'
const errors = require('restify-errors')
class NotFound extends errors.NotFoundError {
  constructor(message) {
    super(message)
  }
}

class AlreadyExists extends errors.ForbiddenError {
  constructor(message) {
    super(message)
  }
}

exports = module.exports = () => {
  return { NotFound, AlreadyExists }
}