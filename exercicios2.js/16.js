function checaAnoBissexto (ano) {
    const divisivelPor4 = ano % 4 === 0
    const divisivelPor400 = ano % 400 === 0
    const divisivelPor100 = ano % 100  !== 0

    return (divisivelPor4 && divisivelPor100) || divisivelPor400

}

const geraResposta = (checaAnoBissexto) => {
    if(checaAnoBissexto === true) {
        return `ano bissexto !`
    } else {
        return `não é bissexto !`
    }
}

console.log(geraResposta(checaAnoBissexto(2000)))


