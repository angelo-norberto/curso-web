function carroEscolhido(carro) {
    switch(carro) { 
        case 'hatch':
        console.log('Compra efetuada com sucesso') 
        break
        case 'sedans':
        case 'motocicletas': 
        case 'camionetes': 
        console.log('Tem certeza que não prefere este modelo?')
        break 
        default: 
        console.log('Não trabalhamos com este tipo de automóvel aqui')
    }
}

carroEscolhido('hatch')
carroEscolhido('sedans')
carroEscolhido('motocicletas')
carroEscolhido('camionetes')
carroEscolhido('')