// Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla
// la cuenta atrás desde ese número hasta cero separados por comas.

let numero = parseInt(prompt("Ingrese un número entero positivo:"))

if (numero > 0) {
    let cuenta_atras = []

    for (let i = numero; i >= 0; i--) {
        cuenta_atras.push(i)
    }

    // Mostrar la cuenta atrás separada por comas
    alert(`Cuenta atrás desde ${numero} hasta 0: ${cuenta_atras.join(', ')}`)
} else {
    alert('El número ingresado no es válido. Por favor, ingrese un número entero positivo.')
}
