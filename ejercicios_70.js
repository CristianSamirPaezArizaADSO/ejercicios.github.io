// Escribir un programa que almacene la cadena de caracteres contraseña en una variable,
// pregunte al usuario por la contraseña hasta que introduzca la contraseña correcta.

const contrasena = "contraseña"

let intento = prompt("Ingrese la contraseña:")

while (intento !== contrasena) {
    intento = prompt("Contraseña incorrecta. Inténtelo de nuevo:")
}

console.log("Contraseña correcta. Bienvenido.")
