var qtdPares = 0
var qtdImpares = 0
var somaPares = 0
var somaImpares = 0

for (var contador = 1; contador <= 100; contador++) {
    if (!(contador % 2)) {
        qtdPares++
        somaPares += contador
    } else {
        qtdImpares++
        somaImpares += contador
    }
}

if (qtdPares) {
    console.log('QtdPares: ', qtdPares, 'Média: ', somaPares / qtdPares)
} else {
    console.log('Não Existem Valores Pares no Intervalo')
}

if (qtdImpares) {
    console.log('QtdImpares: ', qtdImpares)
    console.log('Média: ', somaImpares / qtdImpares)
} else {
    console.log('Não Existem Valores ÍmPares no Intervalo')
}