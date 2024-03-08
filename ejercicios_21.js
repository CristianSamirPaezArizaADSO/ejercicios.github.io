// Escribir un programa que calcule el volumen de un elipsoide.

let altura = prompt("Ingresa la altura del elipsoide")
let largo = prompt("Ingresa el largo del elipsoide")
let ancho = prompt("Ingresa el ancho del elipsoide")

let volumen = (4 * Math.PI) / 3 * altura * largo * ancho;

window.alert(`El volumen del elipsoide es de: ${volumen.toFixed(2)}`)