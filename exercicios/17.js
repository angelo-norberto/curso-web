function aumentoSalario (plano,salario) {
    switch (plano) {
        case 'a':
           console.log(salario + (salario * 0.10))
           break
        case 'b':
           console.log(salario + (salario * 0.15))
           break
        case 'c':
           console.log(salario + (salario * 0.20)) 
           break
        default: 
           console.log('Plano não válido') 

    }
}

aumentoSalario('a', 1000)
aumentoSalario('b', 1000)
aumentoSalario('c', 1000)
aumentoSalario('d')