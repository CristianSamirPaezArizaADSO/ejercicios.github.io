// Escriba un algoritmo que calcule el área de un rectángulo siempre y cuando los lados sean
// positivos: área triangulo= lado * lado

let lado = parseFloat(prompt("Ingresa el lado del rectangulo"))

if(lado > 0){
    let area = lado * lado
    alert(`El area del rectangulo es de: ${area}`)
}else{
    alert("El valor que ingresaste no es positivo")
}