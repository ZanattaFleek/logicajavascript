const NUMERO = 100.567

for (var tabuada = 1; tabuada <= 10; tabuada++) {
    // console.log(tabuada.toString().concat('x').concat(NUMERO.toString()))

    console.log(tabuada.toString()
        .concat(' x ')
        .concat(NUMERO.toString())
        .concat(' = ')
        .concat((tabuada * NUMERO).toFixed(2)))
}