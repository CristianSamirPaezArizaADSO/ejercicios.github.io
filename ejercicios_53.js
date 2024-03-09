// Calcular el valor total del valor de 5 productos, el IVA y el subtotal, visualizar los resultados
// de: Iva, Subtotal y Total de la compra de los artículos

let acum = 0
for (let i = 0; i < 5; i++){
    let precio = parseFloat(prompt("Ingresa el precio del producto"))
    acum += precio
}

let subtotal = acum
alert(`El subtotal es de: ${subtotal}`)

let iva = acum * 0.20
alert(`El iva es ${iva}`)

let total = subtotal + iva
alert(`El total es de: ${total}`)