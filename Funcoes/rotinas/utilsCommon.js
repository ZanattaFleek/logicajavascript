function media(vetor = []) {

    var soma = 0

    for (var contador = 0; contador < vetor.length; contador++) {
        soma += vetor[contador]
    }

    return soma / vetor.length

}

exports.image.png = media