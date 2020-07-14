const getCollmexProducts = require('./helpers/get-collmex-products.js')
const mapProductsProps = require('./helpers/map-products-props.js')
const setProducts = require('./helpers/set-products.js')

module.exports.handler = async (event) => {
  return await getCollmexProducts()
    .then(mapProductsProps)
    .then(setProducts)
}
