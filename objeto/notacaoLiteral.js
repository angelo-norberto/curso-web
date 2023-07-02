const a = 1
const b = 2 
const c = 3 

const obj1 = {a: a, b: b, c : c} //método antigo 
const obj2 = {a, b, c}
console.log(obj1, obj2)

const nomeAtr = 'nota'
const valorAtr = 3.4 

const obj3 = {} //método antigo 
obj3[nomeAtr] = valorAtr
console.log(obj3)

const obj4 = {[nomeAtr]: valorAtr}
console.log(obj4)

const obj5 = {
    funcao1: function() { //método antigo  
        //...
    },
    funcao2(){
        //...
    }
}