let comparaComThis = function (param) {
    console.log(this === param) // torna-se um parametro de escopo global 
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj) // orienta onde o "this" vai ser apontado (muda o escopo)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)