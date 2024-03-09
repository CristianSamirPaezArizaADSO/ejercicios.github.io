// Restarle al primer número al segundo (siempre y cuando el primero sea mayor que él
//segundo, en caso contrario indicar con un mensaje que la operación no es posible
//realizarla.

let num1 = parseFloat(prompt("Ingresa el primer numero"))
let num2 = parseFloat(prompt("Ingresa el segundo numero"))

if (num1 > num2){
    let resta = num1 - num2
    alert(`La resta da: ${resta}`)
}else{
    alert("La operacion no es posible realizarla")
}