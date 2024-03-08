// los alumnos de un curso se han dividido en dos grupos A y B de acuerdo con el sexo
// y el nombre, el grupo A está formado por las mujeres con un nombre anterior a la
// M y los hombres con un nombre posterior a la N y el grupo B por el resto, escribir
// un programa que pregunte al usuario su nombre y sexo y muestre por pantalla el
// grupo al que corresponde.

let nom = prompt("Ingresa tu nombre")
let sexo = prompt("Ingresa tu sexo (M para mujer y H para hombre) ").toUpperCase()
let grupo 

if (sexo === "M" || sexo === "H" ){
    if ((sexo === "M" && nom.toUpperCase() < "M" ) || (sexo === "H" && nom.toUpperCase() < "N" ) ){
        grupo = "A"
    } else {
      grupo = "B"
    }
    window.alert(`Hola ${nom}, perteneces al grupo ${grupo}`)
  } else{
    window.alert("Por favor ingresa M para mujer o H para hombre")
  }