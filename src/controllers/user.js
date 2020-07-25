const userModel = require('../models/user')
const helper = require('../helpers')
const JWT = require('jsonwebtoken')
const helpers = require('../helpers')
const { JWT_KEY } = require('../configs')
const { IP, port } = require('../configs')
module.exports = {
  getUser: async (request, response) => {
    try {
      const name = request.query.name || ''
      const result = await userModel.getUser(name)
      helpers.response(response, 200, result)
    } catch (error) {
      helpers.customErrorResponse(response, 404, 'user not found')
    }
  },

  updateData: async (request, response) => {
    try {
      const userId = request.params.userId
      const salt = helper.generateSalt(18)

      const hashPassword = helper.setPassword(request.body.password, salt)
      if (!request.file || Object.keys(request.file).length === 0) {
        const data = {
          name: request.body.name,
          image: `${IP}:${port}/uploads/user.png`,
          email: request.body.email,
          username: request.body.username,
          password: hashPassword.passwordHash,
          alamat: request.body.alamat,
          salt: hashPassword.salt,
          status: request.body.status || '2',
          updated: new Date()
        }
        const result = await userModel.updateData(data, userId)
        const newData = {
          ...data,
          id: userId
        }
        helpers.response(response, 200, newData)
      }

      const data = {
        name: request.body.name,
        image: `${IP}:${port}/uploads/${request.file.filename}`,
        email: request.body.email,
        username: request.body.username,
        password: hashPassword.passwordHash,
        alamat: request.body.alamat,
        salt: hashPassword.salt,
        status: request.body.status || 'cahsier',
        updated: new Date()
      }
      const result = await userModel.updateData(data, userId)
      const newData = {
        ...data,
        id: userId
      }
      helpers.response(response, 200, newData)
    } catch (error) {
      helpers.customErrorResponse(response, 400, 'Fail update user')
    }
  },

  deleteData: async (request, response) => {
    try {
      const userId = request.params.userId
      const result = await userModel.deleteData(userId)
      helpers.response(response, 200, userId)
    } catch (error) {
      helpers.customErrorResponse(response, 400, 'Fail delete')
    }
  },

  register: async (request, response) => {
    try {
      const salt = helper.generateSalt(18)
      const hashPassword = helper.setPassword(request.body.password, salt)

      if (!request.file || Object.keys(request.file).length === 0) {
        const data = {
          name: request.body.name,
          image: `${IP}:${port}/uploads/user.png`,
          email: request.body.email,
          username: request.body.username,
          password: hashPassword.passwordHash,
          alamat: request.body.alamat,
          salt: hashPassword.salt,
          status: request.body.status || '2',
          created: new Date(),
          updated: new Date()
        }
        const result = await userModel.register(data)
        helpers.response(response, 200, data)
      } const data = {
        name: request.body.name,
        image: `${IP}:${port}/uploads/${request.file.filename}`,
        email: request.body.email,
        username: request.body.username,
        password: hashPassword.passwordHash,
        alamat: request.body.alamat,
        salt: hashPassword.salt,
        status: request.body.status || '2',
        created: new Date(),
        updated: new Date()
      }
      const result = await userModel.register(data)
      helpers.response(response, 200, data)
    } catch (error) {
      helpers.customErrorResponse(
        response,
        400,
        'Register fail user has already added'
      )
    }
  },

  login: async (request, response) => {
    try {
      const data = {
        password: request.body.password,
        email: request.body.email
      }

      const emailValid = await userModel.checkEmail(data.email)
      const dataUser = emailValid[0]
      const hashPassword = helper.setPassword(data.password, dataUser.salt)
      if (
        hashPassword.passwordHash === dataUser.password &&
        emailValid.length > 0
      ) {
        const token = JWT.sign(
          {
            email: dataUser.email,
            id: dataUser.id
          },
          JWT_KEY,
          { expiresIn: '9h' }
        )

        delete dataUser.salt
        delete dataUser.password

        dataUser.token = token

        response.json(dataUser)
      } else {
        helpers.customErrorResponse(response, 400, 'wrong password')
      }
    } catch (error) {
      helpers.customErrorResponse(response, 400, 'email not found')
    }
  }
}
