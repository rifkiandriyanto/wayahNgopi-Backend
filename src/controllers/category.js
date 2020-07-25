const categoryModel = require('../models/category')
const helpers = require('../helpers')
module.exports = {
  getAll: async (request, response) => {
    try {
      const name = request.query.name || ''
      const result = await categoryModel.getAll(name)
      helpers.response(response, 200, result)
    } catch (error) {
      console.log(error)
      helpers.cutomErrorResponse(response, 400, 'Internal server error')
    }
  },
  addCategory: async (request, response) => {
    try {
      const data = {
        name: request.body.name
      }
      const result = await categoryModel.addCategory(data)
      data.id = result.insertId
      console.log(data)
      helpers.response(response, 200, data)
    } catch (error) {
      console.log(error)
      helpers.cutomErrorResponse(response, 400, 'Internal server error')
    }
  },
  updateCategory: async (request, response) => {
    try {
      const categoryId = request.params.categoryId
      const data = {
        name: request.body.name
      }
      const result = await categoryModel.updateCategory(data, categoryId)
      const newEditCategory = {
        ...data,
        id: categoryId
      }
      helpers.response(response, 200, newEditCategory)
    } catch (error) {
      console.log(error)
      helpers.cutomErrorResponse(response, 400, 'Internal server error')
    }
  },
  deleteCategory: async (request, response) => {
    try {
      const categoryId = request.params.categoryId
      const result = await categoryModel.deleteCategory(categoryId)
      const newDeleteCategory = parseInt(categoryId)
      helpers.response(response, 200, newDeleteCategory)
    } catch (error) {
      console.log(error)
      helpers.cutomErrorResponse(response, 400, 'Internal server error')
    }
  }
}
