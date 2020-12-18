const express = require('express')

module.exports = function (server) {

    //API Routes
    const router = express.Router()
    server.use('/api', router)

    //rotas da API
    const billingCycleService = require('../api/billingCycle/billingCycleService')
    //registra todas as rotas (get, post, put, delete)
    billingCycleService.register(router, '/billingCycles')

    const billingSumaryService = require('../api/billingSumary/billingSumaryService')
    router.route('/billingSumary').get(billingSumaryService.getSumary)
}