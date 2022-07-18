const LIMITE_METRAGEM_ISENTO = 250;
const IMPOSTO_POR_M2_EXCEDENTE = 12.25;

var tamanhoImovel = 12 * 30;
var valorImposto = (tamanhoImovel > LIMITE_METRAGEM_ISENTO) ?
    (tamanhoImovel - LIMITE_METRAGEM_ISENTO) * IMPOSTO_POR_M2_EXCEDENTE
    : 0

console.log('Valor do Imposto: ', valorImposto.toFixed(2))


if (condicao01) {
    // Se condicao01 for true or truthy
} else if (condicao02) {
    // Se condicao02 for true or truthy
} else if (condicao03) {
    // Se condicao03 for true or truthy
} else {
    // se nenhuma delas for verdade...
}

condicao01 ? console.log('condicao01') :
    condicao02 ? console.log('condicao02') :
        condicao03 ? console.log('condicao03') :
            console.log('else para todas...')
