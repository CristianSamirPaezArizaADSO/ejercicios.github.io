// . Una papelería vende libros a $10.000, cuadernos $ 7.550, y lapiceros a $5.550. Calcular el
// monto total de la venta, según la cantidad de artículos solicitados durante el día.

let libros = prompt("Ingresa la cantidad de cuadernos a comprar")
let cuadernos = prompt("Ingresa la cantidad de cuadernos a comprar")
let lapiceros = prompt("Ingresa la cantidad de lapiceros a comprar")

let val_libros = 10000
let val_cua = 7550
let val_lapic = 5550

let tot_libros = libros * val_libros
let tot_cua = cuadernos * val_cua
let tot_lapi = lapiceros * val_lapic

alert(`El valor de los libros es de: ${tot_libros} \nEl valor de los cuadernos es de: ${tot_cua} \nEl valor de los lapiceros es de: ${tot_lapi}`)