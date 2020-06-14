'use strict'

class NotFound extends Error {
  constructor(message) {
    super(message)
    this.statusCode = 404
    this.name = 'NotFound'
  }
}

exports = module.exports = () => {
  return { NotFound }
}