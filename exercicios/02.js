function classificaTriangulo(lado1, lado2, lado3) {
    if(lado1 == lado2 == lado3) {
        console.log('Triangulo equilatero')
    } else if(lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        console.log('Triangulo isosceles')
    } else {
        console.log('Triangulo escaleno')
    }
}

classificaTriangulo(2, 2, 2)
classificaTriangulo(2, 3, 3)
classificaTriangulo(2, 3, 4)
