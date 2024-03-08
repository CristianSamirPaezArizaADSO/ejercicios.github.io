// Escribir un programa que muestre el pago de una llamada telefónica sabiendo que cada
// minuto cuesta $355 pesos y un IVA 20 %.

let min = prompt("Ingresa la cantidad de minutos")
let precio = 355
let iva = 0.2

let multi = min * precio
let valor_iva = multi * iva
let valor_fin = multi + valor_iva

window.alert(`El valor es de: ${valor_fin}`)