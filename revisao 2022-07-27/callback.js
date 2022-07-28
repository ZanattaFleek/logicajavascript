function imprimePar() {
    console.log('Número Par')
}

function imprimeImpar() {
    console.log('Número ímpar')
}

function parOuImpar(numero,cbPar,cbImpar) {
    if (numero % 2 == 0) {
        cbPar()
    } else {
        cbImpar()
    }
}

parOuImpar(10,imprimePar,imprimeImpar)
// parOuImpar(11,imprimePar,imprimeImpar)
