console.log(this == global) //this aponta para module.exports 
console.log(this == module) //false

console.log(this == module.exports)
console.log(this == exports)

function logThis() {
    console.log('Dentro de uma function..')
    console.log(this == exports) // dentro de uma function this aponta para global
    console.log(this === global)

    this.perigo = '...'
}

logThis()