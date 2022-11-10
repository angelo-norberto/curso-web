function anuidadeAssociacao ( mes, valoranuidade ) { 

    switch (mes) {
        case 1: 
        console.log( 'Janeiro: ' + valoranuidade * ( 1 + 0.05 ) ** mes )
        break
        case 2: 
        console.log( 'Fevereiro: ' + valoranuidade * ( 1 + 0.05 ) ** mes )
        break
        case 3: 
        console.log('Março: ' + valoranuidade * ( 1 + 0.05 ) ** mes )
        break
        case 4: 
        console.log('Abril: ' + valoranuidade * ( 1 + 0.05 ) ** mes )
        break
        case 5: 
        console.log('Maio: ' + valoranuidade * ( 1 + 0.05 ) ** mes )
        break
        case 6: 
        console.log('Junho: ' + valoranuidade * ( 1 + 0.05 ) ** mes )
        break
        case 7: 
        console.log('Julho: ' + valoranuidade * ( 1 + 0.05 ) ** mes )
        break
        case 8: 
        console.log('Agosto: ' + valoranuidade * ( 1 + 0.05 ) ** mes )
        break
        case 9: 
        console.log('Setembro: ' + valoranuidade * ( 1 + 0.05 ) ** mes )
        break
        case 10: 
        console.log('Outubro: ' + valoranuidade * ( 1 + 0.05 ) ** mes )
        break
        case 11: 
        console.log('Novembro: ' + valoranuidade * ( 1 + 0.05 ) ** mes )
        break
        case 12: 
        console.log('Dezembro: ' + valoranuidade * ( 1 + 0.05 ) ** mes )
        break
        default:
        console.log('Mês inválido !')
    }
}

anuidadeAssociacao(1, 200)
anuidadeAssociacao(2, 200)
anuidadeAssociacao(3, 200)
anuidadeAssociacao(4, 200)
anuidadeAssociacao(5, 200)
anuidadeAssociacao(6, 200)
anuidadeAssociacao(7, 200)
anuidadeAssociacao(8, 200)
anuidadeAssociacao(9, 200)
anuidadeAssociacao(10, 200)
anuidadeAssociacao(11, 200)
anuidadeAssociacao(12, 200)
anuidadeAssociacao(20)


//utilizando if 

function calcularValor(mes, valor){
    if(mes > 0 && mes < 13) {
        atraso = mes - 1
        return (valor * ((1 + (5/100))**atraso)).toFixed(2)
    } else {
        return 'Mês inválido.'
    }
}

console.log(calcularValor(4, 100))