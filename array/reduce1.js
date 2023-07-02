const alunos = [
    {nome: 'Joao', nota: 7.4, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.8, bolsista: true}
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) { 
    console.log(acumulador, atual)
    return acumulador + atual 
}, 0 ) // valor inicial  

console.log(resultado)
