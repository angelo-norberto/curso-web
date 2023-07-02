function filtraQuantidadeDigitos (arrNumeros, qtdDigitos) {
    const resultado = arrNumeros.filter(numero => {
        return numero.toString().length === qtdDigitos
    })

    return resultado
}

console.log(filtraQuantidadeDigitos([5, 9, 1, 126, 11], 1))