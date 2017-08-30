//Backend/server/database.js
const mongoose = require('mongoose') // responsável pela conexao com o monbodb e mapeamento dos nossos objetos por documentos que serão armazenados no monbodb
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/db_finance', {useMongoClient: true})

// mensagens de erro pra validar o schema billingCycle.js
mongoose.Error.messages.general.required = "O Atributo  '{PATH}' é obrigatório. "
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum = "O '{VALUE}' não é valido para o atributo '{PATH}'."
