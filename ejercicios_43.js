// Escriba una expresión regular que reconozca las cadenas de doble comillas. Debe permitir
// la presencia de comillas y caracteres escapados.

let frase = prompt("Por favor, ingresa una frase:")

let regex = /"(?:\\.|[^\\"])*"/g;

let coincidencias = frase.match(regex)


alert(coincidencias)
