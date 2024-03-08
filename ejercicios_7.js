// los tramos impositivos para la declaración de la renta en un determinado país son:
// a. entre 10000 y 20000 ---- 5%
// b. entre 20000 y 35000 ---- 10%
// c. entre 35000 y 60000 ---- 20%
// d. más de 60000 ---- 45%
// escribir un programa que pregunte al usuario su renta anual y muestre por pantalla
// el tipo de impositivo que le corresponde.


let rent = prompt("Ingresa tu renta anual")
let descuento
let pre_fin

if (rent >= 10000 && rent <= 20000) {
    descuento = rent * 0.05
    pre_fin = rent - descuento
    window.alert(`Tienes un descuento de 5%, el descuento es de ${descuento}, el precio final es de ${pre_fin}.`)
} else if (rent > 20000 && rent <= 35000) {
    descuento = rent * 0.10
    pre_fin = rent - descuento
    window.alert(`Tienes un descuento de 10%, el descuento es de ${descuento}, el precio final es de ${pre_fin}.`)
} else if (rent > 35000 && rent <= 60000) {
    descuento = rent * 0.20
    pre_fin = rent - descuento
    window.alert(`Tienes un descuento de 20%, el descuento es de ${descuento}, el precio final es de ${pre_fin}.`)
} else {
    descuento = rent * 0.45
    pre_fin = rent - descuento
    window.alert(`Tienes un descuento de 45%, el descuento es de ${descuento}, el precio final es de ${pre_fin}.`)
}
