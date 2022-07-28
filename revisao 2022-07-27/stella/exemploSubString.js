var nome = 'Fleek'
/*
for (var indice = 0; indice < nome.length; indice++) {
    console.log('Posição '
        .concat(indice).concat(' tem valor ')
        // .concat(nome.substring(indice, indice + 1)))
        .concat(nome.charAt(indice)))
}
*/

for (var indice = nome.length-1; indice >= 0; indice--) {
    console.log('Posição '
        .concat(indice).concat(' tem valor ')
        // .concat(nome.substring(indice, indice + 1)))
        .concat(nome.charAt(indice)))
}



