var soma = 0
function imprimirValor(oque) {
    console.log(oque)
    soma += oque
}

var notas = [5, 6.7, 3.5, 7.9, 9, 8]

notas.forEach(imprimirValor)

console.log('Somatória dos valores: ',soma)