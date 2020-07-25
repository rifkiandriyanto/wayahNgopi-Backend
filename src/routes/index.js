const express = require('express')
const Route = express.Router()
const productRoute = require('./product')
const userRoute = require('./user')
const transactionRouter = require('./transaction')
const categoryRouter = require('./category')

Route
  .use('/product', productRoute)
  .use('/user', userRoute)
  .use('/uploads', express.static('./uploads'))
  .use('/transaction', transactionRouter)
  .use('/category', categoryRouter)

module.exports = Route
