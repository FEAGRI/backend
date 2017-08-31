//backend/api/billingSummary/billingSummaryService.js

const _ = require('lodash')
const BillingCycle = require('../billingCycle/billingCycle')

// Mais uma função minddleware
function getSummary(request, response){
  BillingCycle.aggregate({
        $project:{ credit:{$sum: "$credits.value"}, debt:{$sum: "$debts.value"}}
  },{
        $group:{
          _id: null,
          credit:{$sum: "$credit"},
          debt: {$sum: "$debt"}}
  },{
        $project: { _id:0, credit: 1, debt: 1} // credit e debt 1 significa TRUE
  }, function(error, result){
    if(error){
      response.status(500).json({erros:[error]})
    } else{
      response.json(_.defaults(result[0], {credit:0, debt:0})) //_.defaults é função do lodash
    }
  })
}

module.exports = { getSummary } // exportar a function getSummary minddleware
