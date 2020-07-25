const express = require('express')
const Route = express.Router()

const {
  register,
  login,
  getUser,
  updateData,
  deleteData
} = require('../controllers/user')
const { uploadImage } = require('../controllers/upload')

Route.get('/', getUser)
  .post('/register', uploadImage, register)
  .post('/login', login)
  .patch('/:userId', uploadImage, updateData)
  .delete('/:userId', deleteData)

module.exports = Route
