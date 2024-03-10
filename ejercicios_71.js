// Escribir un programa que pida al usuario un número entero y muestre por pantalla si es un
// número primo o no.

let num = parseInt(prompt("Ingresa un número entero:"))

let primo = true

if (num <= 1) {
    primo = false
} else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            primo = false
            break;
        }
    }
}

if (primo) {
    alert(`${num} es un número primo.`)
} else {
    alert(`${num} no es un número primo.`)
}
