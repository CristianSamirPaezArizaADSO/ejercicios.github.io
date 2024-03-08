// Escribir un programa que calcule el área y el volumen de un cilindro.

let radio = parseFloat(prompt("Ingresa el radio del cilindro"));
let altura = parseFloat(prompt("Ingresa la altura del cilindro"));

let areaBase = Math.PI * Math.pow(radio, 2);
let volumen = areaBase * altura;

let areaTotal = 2 * Math.PI * radio * (radio + altura); 

window.alert(`El área del cilindro es de: ${areaTotal.toFixed(2)} unidades cuadradas\nEl volumen del cilindro es de: ${volumen.toFixed(2)} unidades cúbicas`);
