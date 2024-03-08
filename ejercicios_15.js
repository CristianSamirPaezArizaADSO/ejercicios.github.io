// Escribir un programa que calcule la longitud y el área de una circunferencia.

let radio = parseFloat(prompt("Ingresa el radio de la circunferencia"));

let diametro = 2 * radio
let longitud = Math.PI * diametro
let area = Math.PI * Math.pow(radio, 2);


window.alert(`La lungitud es de: ${longitud} \nEl area es de: ${area} `);