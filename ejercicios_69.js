// Escribir un programa que pida al usuario un número entero y muestre por consola un
// triángulo rectángulo como el de más abajo.

let n = parseInt(prompt("Introduce la altura del triángulo (entero positivo):"))

if (n > 0) {
    for (let i = 1; i <= n; i += 2) {
        let fila = ""
        for (let j = i; j >= 1; j -= 2) {
            fila += j + " "
        }
        console.log(fila)

    }
} else {
    console.log("Por favor, ingrese un número entero positivo.")
}
