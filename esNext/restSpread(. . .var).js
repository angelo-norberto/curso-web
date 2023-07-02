// operador '...' rest(juntar)/spread(separar)

// usar rest como parametro 
const [letra1, letra2, ...letras] = 'Cod3r'
console.log(letra1, letra2, letras)

// usar spread com objeto
const funcionario = {nome: 'Maria', salario: '2323.42'}
const clone = {ativo: true, ...funcionario}

console.log(funcionario)
console.log(clone)

// usar spread com array 
const grupoA = ['joao', 'pedro', 'gloria']
const grupoFinal = ['maria', 'rafaela', ...grupoA]

console.log(grupoA)
console.log(grupoFinal)