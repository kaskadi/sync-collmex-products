const collmex = require('collmex-client')({
  User : process.env.CMX_CLIENT_USER,
  Password : process.env.CMX_CLIENT_PWD,
  "CMXKundennummer" : process.env.CMX_CUST_ID,
  "Firma_Nr" : 1,
  "Systemname" : "collmex-client"
})

module.exports = () => {
  return collmex.get({ Satzart: 'PRODUCT_GET' })
    .then(products => products.filter(product => product.Satzart === 'CMXPRD'))
    .then(products => products.filter(product => product.EAN.length > 0))
}