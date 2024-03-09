// Un banco paga intereses a los depósitos dependiendo del saldo. Si el saldo es menor a
// $100.000 se paga un interés anual de 3%, pero si su saldo es mayor a $100.000 se paga
// un interés anual de 4%. Al final mostrar el saldo final y el interés pagado.

let saldo = parseFloat(prompt("Ingresa tu saldo"))

let interes

if (saldo < 100000) {
    interes = saldo * 0.03
} else {
    interes = saldo * 0.04
}

let saldo_fin = saldo + interes

alert(`Tu saldo final es de ${saldo_fin.toFixed(2)} \nEl interes pagado es de: ${interes.toFixed(2)}`)
