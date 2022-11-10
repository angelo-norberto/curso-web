function calculadora (valor1,operacao,valor2) { 
    switch(operacao) {
    case '+':
        console.log(valor1 + valor2) 
        break
    case '-':
        console.log(valor1 - valor2) 
        break
    case '*':
        console.log(valor1 * valor2) 
        break
    case '/':
        console.log(valor1 / valor2) 
        break    
    default: 
    console.log('Operação inválida')

    }
}

calculadora(20, '+', 10)
calculadora(20, '*', 10)
calculadora(20, '/', 10)
calculadora(20, '-', 10)