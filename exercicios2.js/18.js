function despesasTotais (arr) {    
    let resultado = arr.map(element => {
         return element.preco
    });

    const resultadoSoma = resultado.reduce((acumulador, atual) => {
        return acumulador + atual
    })

    return resultadoSoma
}

console.log(despesasTotais([
    {nome: 'jornal das quintas', categoria: 'informacao', preco: 8.99},
    {nome: 'cinema', categoria: 'entreterimento', preco: 150}
]))
