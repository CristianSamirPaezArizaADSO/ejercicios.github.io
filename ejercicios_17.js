//Escribir un programa que calcule el volumen de una esfera.
 
let radio = parseFloat(prompt("Ingresa el radio de la esfera"))

let volumen = (4 / 3) * Math.PI * Math.pow(radio, 3)

window.alert(`El volumen de la esfera es de: ${volumen}`)