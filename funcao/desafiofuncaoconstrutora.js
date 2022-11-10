function Pessoa (nome){
    this.nome = nome

    this.falar = function (){
        console.log(`Meu nome é ${this.nome}`)

    this.cu = function (){ 
        console.log(`${this.nome} é doidinha`)
    }
    }
}
    const p1 = new Pessoa('José')
        p1.falar()

    const p2 = new Pessoa('Bebel')
        p2.falar()

    p2.cu()