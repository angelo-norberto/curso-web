// json é um formato de dados textual (serve para se comunicar em sistemas que operam de maneira diferentes) 
// todas as linguagens conseguem lê-lo 
// não é um arquivo executavel
// todos os nomes de atributos devem ser delimitados por aspas duplas 

const objeto = {a: 1, b: 2, c: 3, soma() { return a + b + c}}

console.log(JSON.stringify(objeto))

// console.log(JSON.parse("{a: 1, b: 2, c: 3}"))  (nao valido)
console.log(JSON.parse('{"a": 1}'))
console.log(JSON.parse('{"a": "juaum"}'))
console.log(JSON.parse('{"a": true, "c": {}, "d": []}')) 
 