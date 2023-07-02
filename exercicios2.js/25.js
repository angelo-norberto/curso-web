function buscaPorPalavrasSemelhantes (inicio, arr) {
    return arr.filter(palavra => palavra.includes(inicio))
}

console.log(buscaPorPalavrasSemelhantes('rab', ['rabanete', 'almeirao', 'rosbife']))