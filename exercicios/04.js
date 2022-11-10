function operacao (dividendo, divisor) { 
    let a = dividendo / divisor
    let b = dividendo % divisor 

    console.log(`A divisao entre ${dividendo} e ${divisor} é ${a}, e o resto da divisão é ${b}`) 
}

operacao(20, 5)