    Array.prototype.filter2 = function(callback) {
        newArr = []
        for(let i = 0; this.length < i; i++) {
            if(newArr.push(callback(this[i], i, this))) {
                newArr.push(this[i])
            }  
        }

        return newArr
    }

const produtos = [
    {nome:'Notebook', preco: 2499, fragil: true},
    {nome:'iPad', preco: 4199, fragil: true},
    {nome:'Copo de Vidro', preco: 12.49, fragil: true}, 
    {nome:'Copo de Plastico', preco: 9.49, fragil: false}
]

const prodCaro = produto {
    if(produto.preco >= 2000) {
        return produto.preco
    }
}

const prodFragil = produto => produto.fragil == true
 
console.log(produtos.filter2(prodFragil).filter2(prodCaro))