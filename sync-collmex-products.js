const getCollmexProducts = require('./helpers/get-collmex-products.js')
const mapProductsProps = require('./helpers/map-products-props.js')
const setProducts = require('./helpers/set-products.js')

module.exports.handler = async (event) => {
  let res = true
  await getCollmexProducts()
    .then(mapProductsProps)
    .then(setProducts)
    .then(bulkResponse => {
      console.log(JSON.stringify(bulkResponse, null, 2))
    })
    .catch(err => {
      console.log(JSON.stringify(err, null, 2))
      res = false
    })
  return res
}
