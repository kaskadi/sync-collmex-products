const propsMap = require('../data/props-map.js')

module.exports = (products) => {
  return products.map(product => Object.fromEntries(mapCollmexData(Object.entries(product))))
}

function mapCollmexData (productEntries) {
  return productEntries.map(parseProductEntry).filter(entry => entry)
}

function parseProductEntry (entry) {
  const propMap = propsMap[entry[0]]
  if (!propMap) {
    return undefined
  }
  const fieldType = propMap.type
  const value = entry[1]
  const parsedValue = fieldType === Array ? [value] : fieldType(value)
  return [propMap.field, parsedValue]
}
