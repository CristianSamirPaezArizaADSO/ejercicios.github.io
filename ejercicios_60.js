// Hacer un programa que permita ingresar n cantidad de cursos, si la cantidad de cursos que
// lleva el alumno es menor que 6 el pago será $2.000.000 por cada curso, pero si la cantidad
// de cursos es mayor que 6 el pago será únicamente de $1.200.000

let cursos = parseInt(prompt("Ingrese la cantidad de cursos que lleva el alumno:"))

let pago;

if (cursos <= 6) {
    pago = cursos * 2000000
} else {
    pago = cursos * 1200000 
}

alert(`El pago total es de: ${pago}`)
