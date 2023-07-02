function inverso(valor) {
    let tipo = typeof valor

    if (tipo == "boolean") {
        return !valor
    } else if (tipo == "number") {
        return -valor
    } else {
        return `Valor numerico ou booleanico esperados, mas o tipo é ${tipo}`
    }
}

console.log(inverso(1))
console.log(inverso(true))
console.log(inverso('modo serio'))