// Escribir un programa que pregunte al usuario una cantidad a invertir, el interés anual y el
// número de años, y muestre por pantalla el capital obtenido en la inversión cada año que
// dura la inversión.

let inversion = parseFloat(prompt("Ingresa una cantidad a invertir"))
let interes_anual = parseFloat(prompt("Ingresa el interés anual (en porcentaje)"))
let años = parseInt(prompt("Ingresa el número de años de la inversión"))

if (inversion > 0 && interes_anual > 0 && años > 0) {
    let capital = inversion; 
    
    for (let i = 1; i <= años; i++) {
        let interes = capital * (interes_anual / 100)
        capital += interes
        alert(`Capital obtenido en el año ${i}: ${capital.toFixed(2)}`)
    }
} else {
    alert('Por favor, ingrese valores válidos (números positivos) para la cantidad a invertir, el interés anual y el número de años.')
}
