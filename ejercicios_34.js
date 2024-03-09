// . Generar el algoritmo que dé como resultado el tiempo estimado para el llenado de un
// depósito.
// a. Q = V/t, siendo Q (caudal), V (volumen) y t (tiempo).
// b. Volumen = PI *(radio^2)* H (altura del depósito).
// El tiempo se encuentra en minutos. Normalmente se mide el volumen en litros y el tiempo
// en segundos

let radio = parseFloat(prompt("Ingresa el radio del deposito"))
let altura = parseFloat(prompt("Ingresa la altura del deposito"))
let caudal = parseFloat(prompt("Ingresa el caudal del deposito"))

let volumen = Math.PI * Math.pow(radio, 2) * altura
let tiempo_est = volumen / caudal

alert(`EL tiempo estimado para llenarse es de ${tiempo_est.toFixed(2)}`)