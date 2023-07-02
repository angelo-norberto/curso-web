//closure é um escopo criado quando uma função é declada 
//permite o acesso a variaveis externas a função 

//contexto léxico em ação 

const x = 'global'

function fora() { 
    const x = 'local'
    function dentro() {   // closure
        return x 
    }
    return dentro 
}

const minhafuncao = fora()
console.log(minhafuncao())