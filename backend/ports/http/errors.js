'use strict'

class NotFound extends Error {
  constructor(message) {
    super(message)
    this.name = 'NotFound'
  }
}

exports = module.exports = () => {
  return { NotFound }
}