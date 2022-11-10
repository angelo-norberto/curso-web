function valorSaude (idade) {

    if (idade < 10) { 
        return 180
    } else if (idade < 30) {
        return 150
    } else if (idade < 60) {
        return 195
    } else { 
        return 230
    }
}

console.log(valorSaude(20))
console.log(valorSaude(2))
console.log(valorSaude(50))
console.log(valorSaude(110))

