'use strict'

require("dotenv").config();

const IoC = require('electrolyte')
const bootstrap = require('./infrastructure/config/bootstrap')

IoC.use(IoC.node_modules())
IoC.use('schemas', IoC.dir('infrastructure/database/schemas'))
IoC.use(IoC.dir('infrastructure/config'))
IoC.use(IoC.dir("."));

bootstrap.init()
bootstrap.registerProviders()
bootstrap.createServer()