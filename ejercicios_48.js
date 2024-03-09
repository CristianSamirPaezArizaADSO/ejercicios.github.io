// Escriba un algoritmo que permita calcular el área, debe preguntar que figura geométrica
// desea calcular "Triángulo y Círculo: (Escriba T o C):
// a. Triangulo = base * altura / 2
// b. Circulo = PI * radio* radio

let figura = prompt("Ingresa la figura a la que le quieres calcular el area (T para triangulo y C para circulo)").toUpperCase()

if (figura === "T"){
    let base = prompt("Ingresa la base del triangulo")
    let altura = prompt("Ingresa la altura del triangulo")

    let area = (base * altura) / 2 

    alert(`El area es de: ${area}`)
}else if(figura === "C"){
    let radio = parseFloat(prompt("Ingresa el radio del círculo"))

    let area = Math.PI * Math.pow(radio, 2)
    
    alert("El área del círculo es: " + area.toFixed(2))
}else{
    alert("Respuesta invalida por favor ingresa T o C ")
}

