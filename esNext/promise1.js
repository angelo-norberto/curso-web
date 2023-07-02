// promise, é algo que ira ser executado posteriormente 
// as promises trabalham com parametro único
let p = new Promise(resolve => {
    resolve(['cleitin','mane','clebin'])
})

// manipula ou printa o valor que foi 'prometido', quando ele foi cumprido 
// a cada vez que a funcao then é invocada, o valor passa a ser resultado da primeira chamada 
p
 .then(valor => valor[0])
 .then(primeiro => primeiro[0])
 .then(letra => letra.toUpperCase())
 .then(letraMaiuscula => console.log(letraMaiuscula))
