//coleção dinamica de pares chave/valor
const produto = new Object 
produto.nome = 'cadeira' // notação ponto (cria atributo a partir da notação ponto)
produto['marca do produto'] = 'generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 100000,
    proprietario: {
        nome: 'claudio', 
        idade: 49, 
        endereco: {
            logadouro: 'rua dos alfeneiros',
            numero: 434,
        },

        condutores: [{
            nome: 'Junior',
            idade: 19,
        }, {
            nome: 'Cleitu',
            idade: 21,
        }],
        
        calcularSeguro: function() {
            //...
        }
    }
}

carro.proprietario.endereco.numero = 102
     

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularSeguro
console.log(carro)
