// Realice el siguiente algoritmo para convertir pesos a dolores y a euros, utilizando como
// constante el valor de una moneda

let peso = parseFloat(prompt("Ingresa la cantidad de pesos a convertir"))

let dolar = peso * 0.00026
let euro =  peso * 0.00023

alert(`Cantidad en dolares: ${dolar.toFixed(2)}$ \nCantidad en euros ${euro.toFixed(2)}€`)