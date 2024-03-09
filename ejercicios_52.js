// En cierta empresa se les paga a sus trabajadores de la siguiente forma: si el empleado es
// de planta, la hora trabajada se le paga a $20000, si el empleado es administrativo, la hora
// trabajada se le paga a $10000. Para calcular su pago es necesario conocer el total de
// horas trabajadas.

let empleado = prompt("Ingresa tu rango (planta P o administrativo A)").toUpperCase()

if (empleado === "PLANTA" || empleado === "P") {
    let hora = 20000
    let horas = parseFloat(prompt("Ingresa las horas trabajadas"))
    let tot = hora * horas
    alert(`Tu pago es de: ${tot}`)
} else if (empleado === "ADMINISTRATIVO" || empleado === "A") {
    let hora = 10000
    let horas = parseFloat(prompt("Ingresa las horas trabajadas"))
    let tot = hora * horas
    alert(`Tu pago es de: ${tot}`)
} else {
    alert("Elección inválida")
}
    