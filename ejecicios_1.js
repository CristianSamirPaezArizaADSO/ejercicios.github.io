// Escribir un programa que pregunte al usuario su edad y muestre por pantalla si es
// mayor o menor de edad, el programa debe validar que solo se puedan ingresar
// números positivos.

let edad = prompt("Ingresa tu edad")

if (isNaN(edad) || edad <= 0) {
  window.alert("Debes ingresar un número positivo válido para la edad")
}
else {
  if (edad < 18) {
    window.alert("Eres menor de edad")
  }
  else {
    window.alert("Eres mayor de edad")
  }
}