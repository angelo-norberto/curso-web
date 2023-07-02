const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Senna']
pilotos.pop() // remove elemento da ultima posição do array
console.log(pilotos)

pilotos.push('Verstappen') // adiciona elemento no ultima posição do array 
console.log(pilotos)

pilotos.shift() // remove elemento da primeira posição do array 
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona elemento da primeria posição do array
console.log(pilotos)

// splice remove e adiciona elementos de um array

// adicionar
pilotos.splice(2, 0, 'Senna', 'Bottas') 
console.log(pilotos)

// remover 
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) // novo array a partir do indice slice(x)
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 4) // ultimo indice nao é incluido 
console.log(algunsPilotos2)