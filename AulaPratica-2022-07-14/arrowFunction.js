var soma = 0
var notas = [5, 6.7, 3.5, 7.9, 9, 8]

notas.forEach(
    (valorElemento, indice) => {
        soma += valorElemento
        console.log('Indice dentro de ArrowFunction: ',indice)
    }
)

console.log('Somatória dos valores: ', soma)