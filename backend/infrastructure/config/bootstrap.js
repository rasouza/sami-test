'use strict'

const IoC = require('electrolyte');

module.exports = {
  async init() {
    await IoC.create(`infrastructure/database/${process.env.DB_DRIVER}`)
  },

  async createServer() {
    const server = await IoC.create("infrastructure/webserver/server");

    server.listen(8080, () => {
      console.log(`${server.name} listening at ${server.url}`);
    });
  }
}