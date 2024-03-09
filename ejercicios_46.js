// Calcule el mayor de tres números, permitiendo leer 3 valores diferentes

function encontrarMaximo(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));
let num3 = parseFloat(prompt("Ingrese el tercer número:"));

let mayor = encontrarMaximo(num1, num2, num3);

alert(`El mayor de los 3 es el: ${mayor}`);
