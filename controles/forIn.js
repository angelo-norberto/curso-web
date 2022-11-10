const notas = [3, 2, 6, 7]

for(let i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'jose',
    idade: 19
}
for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]} `)
}

