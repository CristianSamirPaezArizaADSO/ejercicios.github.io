// Escribir un programa que pida al usuario un número entero y muestre por pantalla un
// triángulo rectángulo como el de más abajo, de altura el número introducido.

let n = parseInt(prompt("Introduce la altura del triángulo (entero positivo):"));

if (n > 0) {
    let triangle = ''; // Variable para almacenar el HTML del triángulo
    
    for (let i = 1; i <= n; i += 2) {
        let fila = "";
        
        for (let j = i; j >= 1; j -= 2) {
            fila += j + " ";
        }
        
        triangle += fila + '<br>'; // Agregar la fila al HTML del triángulo
    }
    
    document.write(triangle); // Mostrar el triángulo en la página web
} else {
    document.write("Por favor, ingrese un número entero positivo.");
}
