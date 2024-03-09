// Calcular todos los pagos hechos de un restaurante y que si el consumo ingresado excede
// los $130.000 el descuento será del 15%, de lo contrario no hay descuento.

let cuenta = parseFloat(prompt("Ingresa el valor de tu cuenta"))

if (cuenta >= 130000){
    let descuento = cuenta * 0.15
    let tot = cuenta - descuento
    alert(`Tu cuenta con un descuento del 15% es: ${tot}$`)
}else{
    alert("No tienes descuento")
}