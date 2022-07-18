const NOTAS = [5,8,9,2.6]

function media(vetor = []) {

    var soma = 0

    for(var contador = 0; contador < vetor.length; contador++) {
        soma += vetor[contador]
    }

    vetor = []

    return soma / vetor.length

}

console.log(media(NOTAS))
console.log(NOTAS)
