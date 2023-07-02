function bhaskaraResolvida (a, b, c) {
    let resultados = []
    let delta = (b ** 2) - 4 * a * c
    
    if (delta < 0) {
        return 'Delta é um numero negativo'
    } 
    else {
        let result1 = (-b + Math.sqrt(delta) / 2)
        let result2 = (- b - Math.sqrt(delta) / 2)
        resultados.push(result1)
        resultados.push(result2)
        return resultados
    }
}

console.log(bhaskaraResolvida(20, 20, 2))
console.log(bhaskaraResolvida(2, 2, 30))