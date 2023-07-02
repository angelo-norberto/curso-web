const peso1 = 1.0
const peso2 = Number('2.0')
const peso3 = Number(3.4)

console.log(peso1, peso2)
console.log(Number.isInteger(peso2))
console.log(Number.isInteger(peso3))

const avaliacao1 = 9.4384
const avaliacao2 = 4.4542

const total = avaliacao1 * peso1 + avaliacao2 * peso2 
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) 
console.log(media.toString(2)) // transforma em valor binario
console.log(typeof media)
console.log(typeof Number)
