// Escribir un programa que muestre por consola la tabla de multiplicar del 1 al 10.

for (let i = 0; i < 10; i++) {
    let fila = ""

    for (let j = 1; j <= 10; j++) {
        fila += `${i} x ${j} = ${i * j}\t`
    }
    console.log(fila)
}
