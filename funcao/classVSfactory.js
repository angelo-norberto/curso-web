class Pessoa { 
    constructor(nome) { 
        this.nome = nome 
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Jão')
p1.falar()

const criarpessoa = nome => {
    falar: () => console.log(`Meu nome é ${nome}`)
}

const p2 = criarpessoa('Cleber')
p2.falar()