const notas = [6.2, 3.5, 8.7, 9.9]

//sem callback
let notaBaixas = []
    for (let i in notas) {
        if (notas[i] < 7){
        notaBaixas.push(notas[i])}
    }

console.log(notaBaixas)

//com callback
const notasBaixas2 = notas.filter(function (nota){
    return nota <= 7
})

console.log(notasBaixas2)


const notasMenorQue7 = nota => nota < 7
const notasBaixas3 = notas.filter(notasMenorQue7)
console.log(notasBaixas3)