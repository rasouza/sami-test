'use strict'

const createServer = require('./infrastructure/webserver/server')

const server = createServer()
server.listen(8080, () => {
  console.log(
    `${server.name} listening at ${server.url}`
  )
})
