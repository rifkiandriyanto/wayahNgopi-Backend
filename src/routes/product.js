const express = require('express')
const Route = express.Router()
const { authentication, authorization } = require('../helpers/auth')
const { getAll, insertData, updateData, getDetail, deleteData } = require('../controllers/product')
const { uploadImage } = require('../controllers/upload')

Route
  .get('/', getAll)
  .get('/:productId', authentication, authorization, getDetail)
  .post('/', uploadImage, insertData)
  .patch('/:productId', uploadImage, updateData)
  .delete('/:productId', deleteData)

module.exports = Route
