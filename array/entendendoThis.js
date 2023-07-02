var ninja = {
    nome: 'mike',
    
    atacar:function(){
        console.log(`${ninja.nome} arremessou sua espada`) //ninja pode ser substituido por this
    },
 
    atacar2() {
        console.log(`${this.nome} arremessou sua espada`)
    }
}
ninja.atacar()
ninja.atacar2()


var menina = {
    nome: "Cristina",

    falar() {
        console.log(`Ola meu nome é ${this.nome}`)
    }
}

menina.falar()
 
const dizer = menina.falar()
dizer