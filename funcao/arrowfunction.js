let dobro = function (a) { // function com parametro
    return 2 * a
}

dobro = (a) => { // função em que os valores são retornados
    return 2 * a
}

dobro = a => 2 * a // return implicito
console.log(dobro(Math.PI).toFixed(1))

let ola = function (){
    return 'ola'
}

ola = () => 'ola'
ola = _ => 'ola' //possui um parametro nao obrigatorio

console.log(ola())
