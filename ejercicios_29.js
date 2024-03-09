// Un estudiante realiza cuatro exámenes. Realizar un algoritmo correspondiente para
// obtener el promedio de las calificaciones obtenidas. Las calificaciones van 1 a 5 puntos.

let not1 = parseFloat(prompt("Ingresa la nota de tu primer examen (1 - 5)"))
let not2 = parseFloat(prompt("Ingresa la nota de tu segundo examen (1 - 5)"))
let not3 = parseFloat(prompt("Ingresa la nota de tu tercer examen (1 - 5)"))
let not4 = parseFloat(prompt("Ingresa la nota de tu cuarto examen (1 - 5)"))

let promedio = (not1 + not2 + not3 + not4) / 4

alert.apply(`El promedio del estudiante es de ${promedio}`)