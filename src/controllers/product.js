const productModel = require('../models/product')
const helpers = require('../helpers')
const { IP, port } = require('../configs/')
module.exports = {
  getAll: async (request, response) => {
    try {
      const category = request.query.category || ''
      const limit = request.query.limit || 666
      const activePage = request.query.page || 1
      const searchName = request.query.name || ''
      const sortBy = request.query.sortBy || 'id'
      const sort = request.query.sort || 'ASC'
      const pagination = {
        activePage, limit, sortBy, sort
      }

      const totalData = await productModel.countData(searchName, category)
      const totalPages = Math.ceil(totalData / limit)
      const pager = {
        totalPages
      }
      const result = await productModel.getAll(searchName, pagination, category)

      helpers.customResponse(response, 200, result, pager)
    } catch (error) {
      console.log(error)
      helpers.customErrorResponse(response, 400, 'Internal server error')
    }
  },
  getDetail: async (request, response) => {
    try {
      const productId = request.params.productId
      const result = await productModel.getDetail(productId)
      helpers.response(response, 200, result)
    } catch (error) {
      console.log(error)
      helpers.customErrorResponse(response, 400, 'Internal server error')
    }
  },
  insertData: async (request, response) => {
    try {
      const data = {
        name: request.body.name,
        description: request.body.description,
        category: request.body.category,
        image: `${IP}:${port}/uploads/${request.file.filename}`,
        price: request.body.price,
        stock: request.body.stock,
        create_at: new Date()
      }
      const result = await productModel.insertData(data)
      data.id = result.insertId
      helpers.response(response, 200, data)
    } catch (error) {
      console.log(error)
      helpers.customErrorResponse(response, 400, 'Internal server error')
    }
  },
  updateData: async (request, response) => {
    try {
      const data = {
        name: request.body.name,
        description: request.body.description,
        category: request.body.category,
        image: `${IP}:${port}/uploads/${request.file.filename}`,
        price: request.body.price,
        stock: request.body.stock,
        update_at: new Date()
      }
      const productId = request.params.productId
      const result = await productModel.updateData(data, productId)
      const newProductAfterUpdate = {
        ...data,
        id: productId
      }
      helpers.response(response, 200, newProductAfterUpdate)
    } catch (error) {
      console.log(error)
      helpers.customErrorResponse(response, 400, 'Internal server error')
    }
  },
  deleteData: async (request, response) => {
    try {
      const productId = request.params.productId
      const result = await productModel.deleteData(productId)
      helpers.response(response, 200, productId)
    } catch (error) {
      console.log(error)
      helpers.customErrorResponse(response, 400, 'Internal server error')
    }
  }

}
