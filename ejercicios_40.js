// Una empresa que contrata personal requiere determinar la edad de las personas que
// solicitan trabajo, pero cuando se les realiza la entrevista sólo se les pregunta el año en que
// nacieron. Realice el código que representen el algoritmo para solucionar este problema.

let nombre = prompt("Ingresa tu nombre")
let nacio = parseInt(prompt("Ingresa el año en que naciste"))

let anos = 2024 -nacio

alert(`${nombre} tienes ${anos} años`)