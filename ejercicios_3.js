// Escribir un programa que pida al usuario dos números y muestre por pantalla su
// división, si el divisor es cero el programa debe mostrar un error, se debe manejar
// mediante excepciones y el mensaje debe ser personalizado

let num1 = prompt("Ingresa el primer numero")
let num2 = prompt("Ingresa el segundo numero")
let resul = num1 / num2

try {
  if (num2 == 0) {
    throw Error()
  }
}

catch (Error) {
  window.alert("Este numero no se puede")
}
window.alert(resul)