// Escribir un programa que lea 4 números y calcule la media.

let num1 = parseFloat(prompt("Ingresa el primer número"));
let num2 = parseFloat(prompt("Ingresa el segundo número"));
let num3 = parseFloat(prompt("Ingresa el tercer número"));
let num4 = parseFloat(prompt("Ingresa el cuarto número"));

let media = (num1 + num2 + num3 + num4) / 4

window.alert(`La media de los cuatro numeros es de: ${media}`)