// Se desea realizar una aplicación que ingrese el nombre del mes y mostrar que signo
// zodiacal pertenece, para ello usar if_else anidados

dia = prompt ("Introduce día");
mes = prompt ("Introduce mes");

switch(mes)

{
case "enero": 
if (dia>=21)
alert("acuario");


case "febrero": 
if (dia<=19)
alert("acuario");
else
alert("piscis");

case "marzo": 
if (dia<=20)
alert("piscis");
else
alert("aries");

case "abril": 
if (dia<=20)
alert("aries");
else
alert("tauro");

case "mayo": 
if (dia<=21)
alert("tauro");
else
alert("geminis");

case "junio": // 06
if (dia<=21)
alert("geminis");
else
alert("cancer");

case "julio": // 07
if (dia>=23)
alert("cancer");
else
alert("leo");

case "agosto": // 08
if (dia<=23)
alert("leo");
else
alert("virgo");

case "septiembre": // 09
if (dia<=23)
alert("virgo");
else
alert("libra");

case "octubre": // 10
if (dia<=23)
alert("libra");
else
alert("escorpio");

case "noviembre": // 11
if (dia<=22)
alert("escorpio");
else
alert("sagitario");

case "diciembre": // 12
if (dia<=21)
alert("sagitario");
else
alert("capricornio");

}