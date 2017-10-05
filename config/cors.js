//
module.exports = function(request, response, next){
  response.header('Access-Control-Allow-Origin', '*'),
  response.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'),
  response.header('Access-Control-Allow-Header', 'Origin, X-Requested-Width, Content-Type, Accept')
  next()
}
