// Un jefe de obra con el dinero que tiene compra cinco juegos de llaves hexagonales cada
// uno por $11500. Una bomba en $1168000 y tres cajas de pernos cada uno por $87000.
// Después de pagar le sobran $91000. ¿Cuánto dinero tenía?

let llaves = 5
let valor = 11500
let bomba = 1
let valor_bom = 1168000
let pernos = 3
let valor_per = 87000
let vueltos = 91000

let total = llaves * valor + bomba * valor_bom + pernos * valor_per + vueltos;

alert(`En total tenia: ${total}$`)