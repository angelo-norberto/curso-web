function Pessoa2 (nome) {
    
    this.nome = nome
    
    this.criarPessoa = function() { // funçao contrutora
    console.log(`Meu nome é ${this.nome}`)
    }
}

const p2 = new Pessoa2('Claudia')
p2.criarPessoa()

