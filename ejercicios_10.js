// La pizzería Bella Napoli ofrece pizzas vegetarianas y no vegetarianas a sus clientes.
// Los ingredientes para cada tipo de pizza aparecen a continuación.
// a. Ingredientes vegetarianos: Pimiento y tofu.
// b. Ingredientes no vegetarianos: Pepperoni, Jamón y Salmón.
// Escribir un programa que pregunte al usuario si quiere una pizza vegetariana o no,
// y en función de su respuesta le muestre un menú con los ingredientes disponibles
// para que elija. Solo se puede elegir un ingrediente además de la mozzarella y el
// tomate que están en todas las pizzas. Al final se debe mostrar por pantalla si la
// pizza elegida es vegetariana o no y todos los ingredientes que lleva.
let pizza;
let ingredientes;

while (true) {

    pizza = prompt("¿Deseas una pizza vegetariana? (Responde 'si' o 'no')").toLowerCase();

    if (pizza === "si") {
        ingredientes = ["Pimiento", "Tofu"];
        break; 
    } else if (pizza === "no") {
        ingredientes = ["Pepperoni", "Jamón", "Salmón"];
        break; 
    } else {
        window.alert("Respuesta inválida. Por favor, responda 'si' o 'no'.");
    }
}

window.alert("Ingredientes disponibles para tu pizza:\n" + ingredientes.join("\n"));

let eleccion;

while (true) {
    eleccion = parseInt(prompt("Elige un ingrediente (Ingresa el número correspondiente)"));
    
    //isNan verifica si la variable "eleccion" no es un número
    if (isNaN(eleccion) || eleccion < 1 || eleccion > ingredientes.length) {
        window.alert("Elección inválida, por favor selecciona un número válido.");
    } else {
        break; 
    }
}
window.alert(`Tu pizza es ${pizza === "si" ? "vegetariana" : "no vegetariana"} y lleva:\n- Mozzarella\n- Tomate\n- ${ingredientes[eleccion - 1]}`);



    


