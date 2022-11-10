//criando função de uma forma literal 
function fun1() {}

//armazenando funcao numa variavel
const fun2 = function() {}

//armazenando funcao em um array 
const array = [function (a, b) { return a,b }, fun1, fun2]

//armazenar em um atributo de objeto 
const obj = {}
obj.falar = function () { return 'opa' }
console.log(obj.falar())

//passar uma funcao como parametro
function run(fun){
    fun()
}

run(function () {console.log('Executando...')})

//uma funcao pode retornar/conter uma funcao
function soma(a, b){
    return function(c){
        console.log(a + b + c)
    }
}

soma(2, 4)(4)
