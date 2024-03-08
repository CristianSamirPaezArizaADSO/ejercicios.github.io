// escribir un programa que almacene la cadena de caracteres contraseña de una
// variable, pregunte al usuario por la contraseña e imprima por pantalla si la
// contraseña introducida por el usuario coincide con la guardada en la variable sin
// tener en cuenta mayúsculas y minúsculas, se debe validar que solo se pueda
// ingresar valores alfanuméricos.

let contra = "cristian";

let validacion = prompt("Ingresa la contraseña");

let regex = /^[a-zA-Z0-9]*$/

if (regex.test(validacion)) {
    if (validacion.toLowerCase() === contra.toLowerCase()) {
      window.alert("¡La contraseña es correcta!");
    } else {
      window.alert("La contraseña es incorrecta.");
    }
  }
else {
  window.alert("La contraseña debe contener solo caracteres alfanuméricos.");
}