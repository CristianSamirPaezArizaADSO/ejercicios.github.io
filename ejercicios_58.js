let dia = parseInt(prompt("Introduce día"));
let mes = prompt("Introduce mes");

switch (mes.toLowerCase()) {
    case "enero":
        if (dia >= 21) {
            alert("Acuario");
        } else {
            alert("Capricornio");
        }
        break;

    case "febrero":
        if (dia <= 19) {
            alert("Acuario");
        } else {
            alert("Piscis");
        }
        break;

    case "marzo":
        if (dia <= 20) {
            alert("Piscis");
        } else {
            alert("Aries");
        }
        break;

    case "abril":
        if (dia <= 20) {
            alert("Aries");
        } else {
            alert("Tauro");
        }
        break;

    case "mayo":
        if (dia <= 21) {
            alert("Tauro");
        } else {
            alert("Géminis");
        }
        break;

    case "junio":
        if (dia <= 21) {
            alert("Géminis");
        } else {
            alert("Cáncer");
        }
        break;

    case "julio":
        if (dia >= 23) {
            alert("Cáncer");
        } else {
            alert("Leo");
        }
        break;

    case "agosto":
        if (dia <= 23) {
            alert("Leo");
        } else {
            alert("Virgo");
        }
        break;

    case "septiembre":
        if (dia <= 23) {
            alert("Virgo");
        } else {
            alert("Libra");
        }
        break;

    case "octubre":
        if (dia <= 23) {
            alert("Libra");
        } else {
            alert("Escorpio");
        }
        break;

    case "noviembre":
        if (dia <= 22) {
            alert("Escorpio");
        } else {
            alert("Sagitario");
        }
        break;

    case "diciembre":
        if (dia <= 21) {
            alert("Sagitario");
        } else {
            alert("Capricornio");
        }
        break;

    default:
        alert("El mes ingresado no es válido.");
}
