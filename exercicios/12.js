function calcularFatorial (n) {
    
    if (n == 0) {
        return 1
    } else { 
        return n * calcularFatorial(n - 1)
    }
}


console.log(calcularFatorial(0)) 
console.log(calcularFatorial(5))
