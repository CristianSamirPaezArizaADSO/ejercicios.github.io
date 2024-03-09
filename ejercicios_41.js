// Ingrese una frase que lo identifique como programador de Software y luego mostrar esta
// frase invertida
let frase = prompt("Ingresa una frase que te identifique como programador de software")
let frase_inver = ""

for (let i = frase.length - 1; i >= 0; i--) {
    frase_inver += frase[i]
}

alert(frase_inver)