//Backend/api/billingCycle/billingCycleService.js

const BillingCycle = require('./billingCycle')

BillingCycle.methods(['get', 'post', 'put', 'delete'])

// Sempre que Ele for dar um update [put] em um objeto, ele vai retornar o objeto novo e não o objeto antigo
BillingCycle.updateOptions({new:true, runValidators: true}) // forçar a validação feita no mapeamento

module.exports = BillingCycle
