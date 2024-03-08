// Una farmacia aplica el precio de los remedios el 10 % de descuento, hacer un programa
// que ingresando el costo de los medicamentos calcule el descuento y el precio final

let pro = prompt("Ingresa el precio del producto")
let desc 
let pre_fin 

desc = pro * 0.1
pre_fin = pro - desc

alert(`Tienes un descuento de 10%, el descuento es de: ${desc} \nEl precio final es de: ${pre_fin}`)

