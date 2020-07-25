const con = require('../configs/connection')

module.exports = {
  getAll: () => {
    return new Promise((resolve, reject) => {
      con.query('SELECT * FROM category', (error, result) => {
        if (error) reject(new Error(error))
        resolve(result)
      })
    })
  },
  addCategory: (data) => {
    return new Promise((resolve, reject) => {
      con.query('INSERT INTO category SET ?', data, (error, result) => {
        if (error) reject(new Error(error))
        resolve(result)
      })
    })
  },
  updateCategory: (data, id) => {
    return new Promise((resolve, reject) => {
      con.query('UPDATE category SET ? WHERE id = ?', [data, id], (error, result) => {
        if (error) reject(new Error(error))
        resolve(result)
      })
    })
  },
  deleteCategory: (id) => {
    return new Promise((resolve, reject) => {
      con.query('DELETE FROM category WHERE id = ?', id, (error, result) => {
        if (error) reject(new Error(error))
        resolve(result)
      })
    })
  }
}
