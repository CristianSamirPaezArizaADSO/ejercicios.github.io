// Escribir un programa en el que se pregunte al usuario por una frase y una letra, y muestre
// por pantalla el número de veces que aparece la letra en la frase

let frase = prompt("Ingrese una frase:")
let letra = prompt("Ingrese una letra para buscar en la frase:")

letra = letra.toLowerCase()

let contador = 0

for (let i = 0; i < frase.length; i++) {
    let caracter = frase[i].toLowerCase()
    
    if (caracter === letra) {
        contador++
    }
}


alert(`La letra "${letra}" aparece ${contador} veces en la frase.`)
