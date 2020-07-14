const es = require('aws-es-client')({
  id: process.env.ES_ID,
  token: process.env.ES_SECRET,
  url: process.env.ES_ENDPOINT
})

module.exports = async (products) => {
  return await getBulkBody(products)
  // es.bulk({
  //   index: 'products',
  //   refresh: true,
  //   body: await getBulkBody(products)
  // })
}

async function getBulkBody (products) {
  return products.map(getOpBodyDuplet(await getAllProducts()))
}

function getOpBodyDuplet (esProducts) {
  return product => {
    let op = {}
    const id = product.ean
    const opOpts = { _id: id, _index: "products" }
    const productExists = esProducts.filter(product => product._id === id).length > 0
    productExists ? op['update'] = opOpts : op['index'] = opOpts
    const body = productExists ? { doc: product } : product
    return [op, body]
  }
}

async function getAllProducts () {
  let from = 0
  const size = 500
  let searchData = await search(from, size)
  let result = searchData.hits.hits
  while (searchData.hits.total.value === size) {
    from += size
    searchData = await search(from, size)
    result = [...result, ...searchData.hits.hits]
  }
  return result
} 

function search (from, size) {
  return es.search({
    index: 'products',
    from,
    size,
    body: {
      query: {
        match_all: {}
      }
    }
  }).then(res => res.body)
}
