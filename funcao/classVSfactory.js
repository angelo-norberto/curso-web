class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)  //classe
    }
}

const p1 = new Pessoa('João')
p1.falar()



const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`) // factory
    }
}

const p2 = criarPessoa('Claudio')
p2.falar()

    