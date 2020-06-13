'use strict'

const restify = require('restify')

const createServer = () => {
  const server = restify.createServer()
  return server
}

module.exports = createServer
