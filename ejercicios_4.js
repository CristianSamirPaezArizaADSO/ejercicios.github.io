// Escribir un programa que pida al usuario un numero entero y muestre por pantalla
// si es par o impar.
let num = prompt("Ingresa un numero")

let regex =  /[0-9]/

if (regex.test(num)) {
  if (num % 2 == 0) {
    window.alert(`El numero ingresado ${num} es par`)
  }
  else {
    window.alert(`El numero ingresado ${num} es impar`)
  }
}
else {
  window.alert("Solo ingresa numeros")
}