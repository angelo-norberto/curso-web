const notas = [6.2, 3.5, 8.7, 9.0]
const nomes = ['Maria Eduarda', 'Jose', 'Maria Clara']

//sem callback
const notasBaixas1 = []
    for (let i in notas) { // ou for(let i = 0; i < 7; i++)
        if (notas[i] < 7){ 
        notasBaixas1.push(notas[i])}
    }

    console.log(notasBaixas1)

//com callback
const notasBaixas2 = notas.filter( function(nota) {
    return nota < 7
})

console.log(notasBaixas2)

const notasMenorQue7 = nota => nota < 7 // function reutilizavel 
const notasBaixas3 = notas.filter(notasMenorQue7)

console.log(notasBaixas3)


const encontrarNomes = nome => nome == 'Maria' // exemplo com strings
const filtrarNomes = nomes.filter(encontrarNomes)
console.log(filtrarNomes)