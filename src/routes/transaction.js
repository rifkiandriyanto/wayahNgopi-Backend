const express = require('express')
const Route = express.Router()
const { payment, weeklyTransaction, recapitulationTransaction, historyTransaction } = require('../controllers/transaction')

Route
  .post('/', payment)
  .get('/weekly', weeklyTransaction)
  .get('/history', recapitulationTransaction)
  .get('/history/:idTransaction', historyTransaction)
module.exports = Route
