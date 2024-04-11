// Desarrollar un diagrama que lea 3 valores diferentes e indique cual es el mayor de ellos, el
// menor o si son iguales

let num1 = parseFloat(prompt("Ingresa el primer número"));
let num2 = parseFloat(prompt("Ingresa el segundo número"));
let num3 = parseFloat(prompt("Ingresa el tercer número"));

if (num1 === num2 && num1 === num3) {
    alert("Los tres números son iguales");
} else if (num1 > num2 && num1 > num3) {
    alert("El primer número es el mayor");
} else if (num2 > num1 && num2 > num3) {
    alert("El segundo número es el mayor");
} else {
    alert("El tercer número es el mayor");
}

if (num1 < num2 && num1 < num3) {
    alert("El primer número es el menor");
} else if (num2 < num1 && num2 < num3) {
    alert("El segundo número es el menor");
} else {
    alert("El tercer número es el menor");
}
