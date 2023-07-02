function operacao(dividendo, divisor) { 
    let a = dividendo / divisor
    let b = dividendo % divisor 

    console.log(`${dividendo} / ${divisor}  = ${a}, o resto da divisão é ${b}`) 
}

operacao(20, 5)