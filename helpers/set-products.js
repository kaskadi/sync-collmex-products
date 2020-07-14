const es = require('aws-es-client')({
  id: process.env.ES_ID,
  token: process.env.ES_SECRET,
  url: process.env.ES_ENDPOINT
})

module.exports = (products) => {
  return es.bulk({
    index: 'products',
    refresh: true,
    body: getBulkBody(products)
  })
}

function getBulkBody (products) {
  return products.map(product => {

  })
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
