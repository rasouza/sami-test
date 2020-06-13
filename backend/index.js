'use strict'

require("dotenv").config();

const IoC = require('electrolyte')
const bootstrap = require('./infrastructure/config/bootstrap')

IoC.use(IoC.node_modules())
IoC.use(IoC.dir("."));

bootstrap.init()
bootstrap.createServer()