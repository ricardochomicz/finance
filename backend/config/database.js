const mongoose = require('mongoose')
module.exports = mongoose.connect('mongodb://localhost/db_finance')

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório!"
mongoose.Error.messages.Number.min = "O valor '{VALUE}' informado é menor que o limite mínimo obrigatório!"
mongoose.Error.messages.Number.max = "O valor '{VALUE}' informado é maior que o limite máximo obrigatório!"
mongoose.Error.messages.String.enum = "'{VALUE}' não é um valor válido para '{PATH}'!"