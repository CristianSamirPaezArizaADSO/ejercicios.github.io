// . Elaborar un algoritmo para calcular el promedio final de la materia de algoritmos.dicha
// calificación se compone de los siguientes porcentajes:
// a. 55 % del promedio final de sus calificaciones de los tres(3) parciales.
//   b. 30 % de la calificación examen final.
//     c. 15 % de la calificación trabajo final.

let parc1 = parseFloat(prompt("Ingresa la nota de tu primer parcial"));
let parc2 = parseFloat(prompt("Ingresa la nota de tu segundo parcial"));
let parc3 = parseFloat(prompt("Ingresa la nota de tu tercer parcial"));
let cal_fin = parseFloat(prompt("Ingresa la calificacion del examen final"));
let trab_fin = parseFloat(prompt("Ingresa la calificacion del trabajo final"));

let sum_not = ((parc1 + parc2 + parc3) / 3) * 0.55;
let examen = cal_fin * 0.30; // Multiplicar por 0.30 para calcular el 30%
let trabajo = trab_fin * 0.15;

let promedio = sum_not + examen + trabajo;

window.alert(`El promedio es de: ${promedio}`);
