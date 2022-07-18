var multiplicador = 5

function somar(numero01 = 0, numero02 = 0) {
    multiplicador = 10
    console.log('Valor de Multiplicador dentro da função somar: ',multiplicador)
    return numero01 + numero02 * multiplicador
}

var resSomar = somar(45,90)

console.log('Valor de Multiplicador fora da função somar: ',multiplicador)

console.log('Resultado da Função Somar: ', resSomar)
