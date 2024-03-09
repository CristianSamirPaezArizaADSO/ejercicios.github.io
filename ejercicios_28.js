// Calcular el sueldo de un empleado dados como datos de entrada:
// a. Nombre.
// b. horas de trabajo.
// c. pago en hora.

let Nombre = prompt("Ingresa tu nombre")
let hrs = prompt("Ingresa la cantidad de horas trabajadas")
let pago = prompt("Ingresa el pago por horas")

let sueldo = hrs * pago

alert(`${Nombre}, este mes tu sueldo es de: ${sueldo}`)