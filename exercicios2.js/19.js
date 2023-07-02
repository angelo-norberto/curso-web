function calcularMedia (arr) {

  const numeroDeElementos = arr.length

  const calcularMedia = arr.reduce((acumulador, atual) => {
    return acumulador + atual
  })

  return calcularMedia / numeroDeElementos
}

console.log(calcularMedia([1, 2, 3, 4, 5, 6]))
