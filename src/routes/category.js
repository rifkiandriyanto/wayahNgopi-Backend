const express = require('express')
const Route = express.Router()
const { getAll, addCategory, updateCategory, deleteCategory } = require('../controllers/category')

Route
  .get('/', getAll)
  .post('/', addCategory)
  .patch('/:categoryId', updateCategory)
  .delete('/:categoryId', deleteCategory)
module.exports = Route
