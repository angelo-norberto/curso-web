/* console.log(module.exports === this)
console.log(module.exports === exports) */

this.a = 1 
exports.b = 2                   //module.exports é o unico a ser retornado   
module.exports.c = 3

exports = null
console.log(module.exports)

exports = {
    nome: 'Teste'
}