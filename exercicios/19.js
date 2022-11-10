function lanche (codigoItem, quantidadeItem) { 
    switch (codigoItem) {
    case 100: 
        console.log(`Cachorro-quente: R$:${quantidadeItem * 3}`)
        break
    case 200: 
        console.log(`Hambúrguer Simples: R$:${quantidadeItem * 4}`)
        break
    case 300: 
        console.log(`Cheeseburguer: R$:${quantidadeItem * 5.5}`)
        break
    case 400: 
        console.log(`Bauru: R$:${quantidadeItem * 7.5}`)
        break
    case 500: 
        console.log(`Refrigerante: R$:${quantidadeItem * 3.5}`)
        break
    case 600: 
        console.log(`Suco: R$:${quantidadeItem * 2.8}`)
        break
    default:
        console.log('Produto não existente')
    }
}

lanche(100, 4)
lanche(500, 19)
lanche(800, 4)