// En una determinada empresa, sus empleados son evaluados al final de cada año.
// Los puntos que pueden obtener en la evaluación comienzan en 0.0 y pueden ir
// aumentando, traduciéndose en mejores beneficios. Los puntos que pueden
// conseguir los empleados pueden ser 0.0, 0.4, 0.6 o más, pero no valores
// intermedios
// entre las cifras mencionadas. A continuación, se muestra una tabla con los niveles
// correspondientes a cada puntuación. La cantidad de dinero conseguida en cada
// nivel es de 2.400 multiplicada por la puntuación del nivel. Escribir un programa que
// lea la puntuación del usuario e indique su nivel de rendimiento, así como la
// cantidad de dinero que recibirá el usuario.

let punt = prompt("Ingresa la puntuacion del empleado (0.0, 0.4, 0.6 o mas)")
let nivel 
let dinero

if (punt === "0.0") {
    nivel = "Insuficiente";
    dinero = 0;
    window.alert(`El nivel de rendimiento es de: ${nivel} \nLa cantidad de dinero es de: ${dinero}`);
} else if (punt === "0.4") {
    nivel = "Medio";
    dinero = 2400 * parseFloat(punt);
    window.alert(`El nivel de rendimiento es de: ${nivel} \nLa cantidad de dinero es de: ${dinero}`);
} else if (punt === "0.6") {
    nivel = "Aceptable";
    dinero = 2400 * parseFloat(punt);
    window.alert(`El nivel de rendimiento es de: ${nivel} \nLa cantidad de dinero es de: ${dinero}`);
} else if (parseFloat(punt) > 0.6) {
    nivel = "Excepcional";
    dinero = 2400 * parseFloat(punt);
    window.alert(`El nivel de rendimiento es de: ${nivel} \nLa cantidad de dinero es de: ${dinero}`);
} else {
    nivel = "Puntuacion invalida";
    dinero = 0;
}