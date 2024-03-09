// En un colegio, se necesita hacer una selección de basquetbol que represente al colegio,
// para lo cual es requisito indispensable que los postulantes sean menores o iguales a 19
// años, con una estatura de más de 175 cm y el peso tiene que estar entre los 80 kg y 75.

let años = parseInt(prompt("Ingresa tu edad"))

if (años <= 19) {
    let estatura = parseFloat(prompt("Ingresa tu altura"))
    if (estatura >= 175) {
        let peso = parseFloat(prompt("Ingresa tu peso"))
        if (peso >= 75 && peso <= 80) {
            alert("Estás seleccionado")
        } else {
            alert("No estás seleccionado")
        }
    } else {
        alert("No estás seleccionado")
    }
} else {
    alert("No estás seleccionado")
}
