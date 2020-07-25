const connection = require('../configs/connection')

module.exports = {
  countData: (searchName, cat) => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT count(*) as totalData FROM product p
            LEFT JOIN category tc ON p.category = tc.id
        WHERE p.name LIKE '%${searchName}%' AND tc.name LIKE '%${cat}%'
            `, (error, result) => {
        if (error) reject(new Error(error))
        resolve(result[0].totalData)
      })
    })
  },
  getAll: (searchName, pagination, category) => {
    return new Promise((resolve, reject) => {
      const totalData = connection.query('SELECT count(*) FROM product')
      const firstData = ((pagination.limit * pagination.activePage) - pagination.limit)
      connection.query(`SELECT
      product.id,
        product.name,
        product.description,
        category.name as category_name,
        product.image,
        product.price,
        product.stock,
        product.create_at,
        product.update_at
        FROM 
        category,
        product
        WHERE
        product.category = category.id 
        AND
        product.name LIKE '%${searchName}%' AND category.name LIKE '%${category}%'
        ORDER BY product.${pagination.sortBy} ${pagination.sort}
        LIMIT ${firstData},${pagination.limit}
        `, (error, result) => {
        if (error) reject(new Error(error))
        resolve(result)
      })
    })
  },
  insertData: (data) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO product SET ?', data, (error, result) => {
        if (error) reject(new Error(error))
        resolve(result)
      })
    })
  },
  getDetail: (productId) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM product WHERE id = ?', productId, (error, result) => {
        if (error) reject(new Error(error))
        resolve(result)
      })
    })
  },

  updateData: (data, productId) => {
    return new Promise((resolve, reject) => {
      connection.query('UPDATE product SET ? WHERE id = ?', [data, productId], (error, result) => {
        if (error) reject(new Error(error))
        resolve(result)
      })
    })
  },

  deleteData: (productId) => {
    return new Promise((resolve, reject) => {
      connection.query('DELETE FROM product where id = ?', productId, (error, result) => {
        if (error) reject(new Error(error))
        resolve(result)
      })
    })
  }

}
