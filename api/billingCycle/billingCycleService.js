//Backend/api/billingCycle/billingCycleService.js

const _ = require('lodash')
const BillingCycle = require('./billingCycle')

BillingCycle.methods(['get', 'post', 'put', 'delete'])

// Sempre que Ele for dar um update [put] em um objeto, ele vai retornar o objeto novo e não o objeto antigo
BillingCycle.updateOptions({new:true, runValidators: true}) // forçar a validação feita no mapeamento

BillingCycle.after('post', sendErrosOrNext).after('put', sendErrosOrNext)

  function sendErrosOrNext(request, response, next){ // objeto bundle node-restful que obtém os erros
    const bundle = response.locals.bundle
    if(bundle.errors){
      var errors = parseErrors(bundle.errors)
      response.status(500).json({errors})
    } else{
      next()
    }
  }

  function parseErrors(nodeRestfulErrors){
    const errors=[]
    _.forIn(nodeRestfulErrors, error => errors.push(error.message))
    return errors
  }

BillingCycle.route('count', function(request, response, next){ //minddleware
  BillingCycle.count(function(error, value){ //count do monbodb
    if(error){
      response.status(500).json({errors:[error]})
    } else {
      response.json({value})
    }
  })
})

module.exports = BillingCycle
