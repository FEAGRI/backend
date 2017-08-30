// backend/config/routes.js

const express = require('express')

//receber server como parâmetro que foi declarado em server.js para passar para outro módulo (routes.js)
module.exports = function(server){
  // API Routes
  const router = express.Router()
  server.use('/api', router) // minddleware

  // Rotas da API
  const billingCycleService = require('../api/billingCycle/billingCycleService')

  billingCycleService.register(router, '/billingCycles')

}
