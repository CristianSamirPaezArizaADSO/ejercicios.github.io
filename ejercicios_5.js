// Para tributar un determinado impuesto se debe ser mayor de 16 años y tener unos
// ingresos iguales o superiores a 1000 mensuales, escribir un programa que pregunte
// al usuario su edad e ingresos mensuales y muestre por pantalla si el usuario debe
// tributar o no.

let nom = prompt("Ingresa tu nombre")
let edad = prompt("Ingresa tu edad")

if (edad >= 16) {
  let ingre = prompt("Ingresa tus ingresos mensuales")
  if (ingre >= 1000) {
    window.alert(`${nom}, debes tributar`)
  }
  else {
    window.alert(`${nom}, no debes tributar`)
  }
} else {
  window.alert(`${nom}, no debes tributar `)
}