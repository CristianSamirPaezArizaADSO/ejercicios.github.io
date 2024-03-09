// Comprobar la fortaleza de una contraseña teniendo en cuenta que debe tener entre 8 y 12
// caracteres, y al menos una mayúscula, una minúscula, y un dígito.

function val_contra(contrasena) {
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,12}$/;
    return regex.test(contrasena);
}

let contrasena = prompt("Ingrese su contraseña:");
if (val_contra(contrasena)) {
    alert("La contraseña es válida.");
} else {
    alert("La contraseña no cumple con los requisitos especificados.");
}
