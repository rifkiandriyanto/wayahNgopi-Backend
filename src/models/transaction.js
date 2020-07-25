const con = require('../configs/connection')

module.exports = {
  payment: (data, a, date) => {
    return new Promise((resolve, reject) => {
      con.query(`SELECT * FROM product WHERE id= ${data.productId}`, (error, result) => {
        if (result.length > 0) {
          var stock = result[0].stock - data.stock
          var price = result[0].price * data.stock

          if (a === 0) { con.query(`INSERT INTO transaction SET ?, idTransaction="${data.idTransaction}", totalPayment=0`, date) }

          con.query(`UPDATE product SET stock = ${stock} WHERE id=${data.productId}`, (error, result) => {
            if (error) reject(new Error(error))
            con.query(`INSERT INTO detail_transaction SET ? , price = ${price}`, data, (result) => {
              con.query(`SELECT sum(price) as tPrice FROM detail_transaction WHERE idTransaction="${data.idTransaction}"`, (error, result) => {
                if (error) reject(new Error(error))
                const newP = result[0].tPrice
                con.query(`UPDATE transaction SET totalPayment = ${newP} WHERE idTransaction="${data.idTransaction}"`, (error, result) => {
                  if (error) reject(new Error(error))
                  resolve(result)
                })
              })
            })
          })
        } else reject(new Error(error))
      })
    })
  },
  historyTransaction: (idTransaction) => {
    return new Promise((resolve, reject) => {
      con.query(`SELECT
      product.name,
      detail_transaction.stock,
      detail_transaction.idTransaction,
      detail_transaction.price
  FROM
      detail_transaction,
      product
  WHERE
      detail_transaction.productId = product.id AND detail_transaction.idTransaction = '${idTransaction}'
  `, (error, result) => {
        if (error) reject(new Error(error))
        resolve(result)
      })
    })
  },
  recapitulationTransaction: () => {
    return new Promise((resolve, reject) => {
      con.query('SELECT * FROM transaction ORDER BY date_added', (error, result) => {
        if (error) reject(new Error(error))
        resolve(result)
      })
    })
  },
  weeklyTransaction: () => {
    return new Promise((resolve, reject) => {
      con.query('SELECT SUM(totalPayment) as totalPayment, date_added FROM transaction GROUP BY date_added ORDER BY date_added DESC LIMIT 14', (error, result) => {
        if (error) reject(new Error(error))
        resolve(result)
      })
    })
  }

}
