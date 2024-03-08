// Escribir un programa que calcule la velocidad de un proyectil que recorre 2km en 5
// minutos, exprese el resultado en metros/segundo.
 
let distancia_km = 2;
let tiempo_min = 5;

let distancia_m = distancia_km * 1000;

let tiempo_seg = tiempo_min * 60;

let velocidad_m_s = distancia_m / tiempo_seg;

window.alert(`La velocidad del proyectil es de ${velocidad_m_s} metros por segundo`)