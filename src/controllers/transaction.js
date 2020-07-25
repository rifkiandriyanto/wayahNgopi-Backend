const models = require('../models/transaction')
const helpers = require('../helpers')

module.exports = {
  payment: async (request, response) => {
    try {
      const payment = request.body
      if (payment === undefined || payment === '') return console.log('Tidak ada data')

      var a = 0
      await payment.products.map(e => {
        const data = {
          idTransaction: payment.idTransaction,
          productId: e.productId,
          stock: e.quantity
        }
        const date = {
          date_added: new Date()
        }
        models.payment(data, a, date)
        a++
      })

      helpers.response(response, 200, 'OK')
    } catch (error) {
      console.log(error)
      helpers.cutomErrorResponse(response, 400, 'Internal server error')
    }
  },
  historyTransaction: async (request, response) => {
    try {
      const idTransaction = request.params.idTransaction
      const result = await models.historyTransaction(idTransaction)
      helpers.response(response, 200, result)
    } catch (error) {
      console.log(error)
      helpers.customErrorResponse(response, 400, 'Internal server error')
    }
  },
  recapitulationTransaction: async (request, response) => {
    try {
      const result = await models.recapitulationTransaction()
      helpers.response(response, 200, result)
    } catch (error) {
      console.log(error)
      helpers.customErrorResponse(response, 400, 'Internal server error')
    }
  },
  weeklyTransaction: async (request, response) => {
    try {
      const result = await models.weeklyTransaction()
      helpers.response(response, 200, result)
    } catch (error) {
      console.log(error)
      helpers.customErrorResponse(response, 400, 'Internal server error')
    }
  }
}
