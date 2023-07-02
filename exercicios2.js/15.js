function valorIndicePar (arr) {

   let resultado = arr.filter((valor, indice) => {
        const valorPar = valor % 2 == 0
        const indicePar = indice % 2 == 0   

        return valorPar && indicePar
    });

    return resultado
}

console.log(valorIndicePar([1, 2, 3, 4]))
console.log(valorIndicePar([10, 20, 22, 43]))