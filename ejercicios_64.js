// Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla
// todos los números impares desde 1 hasta ese número separados por coma

let numero = parseInt(prompt("Ingrese un número entero positivo:"))

if (numero > 0) {
    let impares = [];

    for (let i = 1; i <= numero; i++) {
        if (i % 2 !== 0) {
            impares.push(i)
        }
    }
    alert(`Números impares hasta ${numero}: ${impares.join(', ')}`)
} else {
    alert('El número ingresado no es válido. Por favor, ingrese un número entero positivo.')
}