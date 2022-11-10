const diaUtil = (dia) => {
    switch (dia) {
        case 0: 
            console.log('Domingo, final de Semana')
            break
        case 1:
            console.log('Segunda, dia útil')
            break
        case 2:
            console.log('Terça, dia útil')
            break
        case 3: 
            console.log('Quarta, dia útil')
            break
        case 4: 
            console.log('Quinta, dia útil')
            break
        case 5: 
            console.log('Sexta, dia útil')
            break
        case 6: 
            console.log('Sabado, final de Semana')
            break
        default:
            console.log('Dia inválido')
    }
}

diaUtil(0)
diaUtil(4)
diaUtil(9)