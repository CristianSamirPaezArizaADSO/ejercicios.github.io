// Hacer un programa que permita ingresar n Notas de alumnos (100 – 1), y que imprima cual
// fue la nota alta, la nota baja y cuantos alumnos obtuvieron la máxima nota de 100, cuantos
// obtuvieron las siguientes calificaciones:
// a. «a» = menor que 100 y mayor igual que 90
// b. «b» = menor que 90 y mayor igual que 80
// c. «c» = menor que 80 y mayor igual que 70
// d. «d» = menor que 70 y mayor igual que 60


let alumnos = parseInt(prompt("Ingrese la cantidad de alumnos:"))
let notas = []
let max = 0
let min = 100
let notas_max = 0
let cantidadA = 0
let cantidadB = 0
let cantidadC = 0
let cantidadD = 0

for (let i = 0; i < alumnos; i++) {
    let nota = parseInt(prompt("Ingrese la nota del alumno " + (i + 1) + ":"))
    notas.push(nota)

    if (nota >= 100) {
        notas_max++
    }

    if (nota > max) {
        max = nota
    }

    if (nota < min) {
        min = nota
    }

    if (nota >= 90 && nota < 100) {
        cantidadA++
    } else if (nota >= 80 && nota < 90) {
        cantidadB++
    } else if (nota >= 70 && nota < 80) {
        cantidadC++
    } else if (nota >= 60 && nota < 70) {
        cantidadD++
    }
}

alert(`La nota mas alta es de: ${max}`)
alert(`La nota mas baja es de: ${min}`)
alert(`La cantidad de alumnos con la nota maxima son ${notas_max}`)
alert(`La cantidad de alumnos con calificacion A es de: ${cantidadA}`)
alert(`La cantidad de aluumnos con calificacion B es de: ${cantidadB}`)
alert(`La cantidad de aluumnos con calificacion C es de: ${cantidadC}`)
alert(`La cantidad de aluumnos con calificacion D es de: ${cantidadD}`)
