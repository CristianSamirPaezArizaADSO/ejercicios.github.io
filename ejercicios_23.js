// Realice un algoritmo que, a partir de proporcionarle la velocidad de un automóvil
// expresada en kilómetros por hora, proporcione la velocidad en metros por segundo

let velocidad = prompt("Ingresa la velocidad")

let ms = velocidad / 3.6

alert(`La velocidad en metros por segundo es de: ${ms.toFixed(2)}`)