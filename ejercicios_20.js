// Escriba un algoritmo que permita obtener las raíces reales de la ecuación de
// segundo grado: a * x2 + b + x + c, siendo X un valor constante

let a = parseFloat(prompt("Ingrese el coeficiente 'a'"));
let b = parseFloat(prompt("Ingrese el coeficiente 'b'"));
let c = parseFloat(prompt("Ingrese el coeficiente 'c'"));
let x = parseFloat(prompt("Ingrese el valor de 'x'"));

let discriminante = Math.pow(b, 2) - 4 * a * c;

let mensajeAlerta;

if (discriminante > 0) {
    let raiz1 = (-b + Math.sqrt(discriminante)) / (2 * a);
    let raiz2 = (-b - Math.sqrt(discriminante)) / (2 * a);
    mensajeAlerta = `Las raíces reales son: ${raiz1} y ${raiz2}`;
} else if (discriminante === 0) {
    let raiz = -b / (2 * a);
    mensajeAlerta = `La raíz real doble es: ${raiz}`;
} else {
    mensajeAlerta = "La ecuación no tiene raíces reales.";
}

window.alert(mensajeAlerta);
