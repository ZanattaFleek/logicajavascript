var SALARIO = "R$ 1.935,60"

// 1935.60

SALARIO = SALARIO.replace("R$", "")
SALARIO = SALARIO.replace(" ", "")
SALARIO = SALARIO.replace(".", "")
SALARIO = SALARIO.replace(",", ".")

var salario = parseFloat(SALARIO)

console.log(salario * (1 + 10 / 100))

// SALARIO + SALARIO * 10 / 100
// SALARIO * (1 + 10/100)
// SALARIO * 1.1