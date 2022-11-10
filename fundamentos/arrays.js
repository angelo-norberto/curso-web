const valores = [1.3, 5.2, 9.1, 5.9]
console.log(valores[0], valores[3])
console.log(valores[4])// valor indefinido 

valores[4] = 10 //inserção do valor do indíce 4 
console.log(valores)
console.log(valores.length) //número de elementos dentro do array

valores.push({id:3}, false, null, 'teste')

console.log(valores.pop())//remove o ultimo valor presente no array
delete valores[0]//remove itens especificos demarcados no array
console.log(valores)

console.log(typeof valores)