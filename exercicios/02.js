function area ( lado1, lado2, lado3) { 
    if (lado1 == lado2 && lado2 == lado3){
        return 'Equilátero'
    } else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
        return 'Isósceles'
    } else {
        return 'Escaleno'
    }

}

console.log(area(66, 66, 66))
console.log(area(23, 66, 66))
console.log(area(23, 66, 60))

