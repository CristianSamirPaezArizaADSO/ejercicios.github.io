// En una tienda de HELADO da un descuento por compra a sus clientes con membresía
// dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los
// descuentos son los siguientes: Tipo A 10% de descuento Tipo B 15% de descuento Tipo C
// 20% de descuento

let menbresia = prompt("Ingresa tu tipo de menbrecia (A B C)").toUpperCase()

if (menbresia === "A"){
    alert("El un descuento es de 10%")
}
else if(menbresia === "B"){
    alert("Tienes un descuento de 15%")
}
else if(menbresia === "C"){
    alert("Tienes un descuento de 20%")
}else{
    alert("Ingresaste un valor invalido ")
}