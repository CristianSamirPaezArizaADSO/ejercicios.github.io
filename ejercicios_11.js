// Escribir un programa que sume, resta, multiplique y divida dos números

let num1 = parseFloat(prompt("Ingresa el primer numero"))
let num2 = parseFloat(prompt("Ingresa el segundo numero"))

let suma = num1 + num2
let resta = num1 - num2
let multi = num1 * num2
let div = num1 / num2

window.alert(`La suma de los numeros es de: ${suma} \nLa resta de los numeros es de: ${resta} \nLa multiplicacion de los numeros es de: ${multi} \nLa divicion de los numeros es de: ${div} `)