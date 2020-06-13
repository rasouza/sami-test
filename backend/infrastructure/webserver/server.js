'use strict'

exports = module.exports = restify => {
  const server = restify.createServer();
  return server;
}

exports["@singleton"] = true;
exports["@require"] = ['restify'];