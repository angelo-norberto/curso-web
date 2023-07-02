const produtos = [
    {nome:'Notebook', preco: 2499, fragil: true},
    {nome:'iPad', preco: 4199, fragil: true},
    {nome:'Copo de Vidro', preco: 12.49, fragil: true}, 
    {nome:'Copo de Plastico', preco: 9.49, fragil: false}
]

const prodCaro = produto => {
    if(produto.preco >= 2000) {
        return produto.preco
    }
}

const prodFragil = produnto => {
    if(produto.fragil == true) {
        return produto.fragil
    }
} 
 
console.log(produtos.filter(prodFragil).filter(prodCaro))

