// Escribir un programa que evalúe la siguiente expresión (a+7*c) / (b+2-a) + 2*b

let a = parseFloat(prompt("Ingresa el valor de a"));
let b = parseFloat(prompt("Ingresa el valor de b"));
let c = parseFloat(prompt("Ingresa el valor de c"));

let resultado = (a + 7 * c) / (b + 2 - a) + 2 * b;

window.alert(`El resultado es de: ${resultado}`);
