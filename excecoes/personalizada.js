'use strict';

import { dividir } from "./utils.js";

try {
    var resultado = dividir(100, '10')
    console.log('Resultado da Divisão', resultado)
} catch (erro) {
    console.log('Erro: ', erro.message)
} finally {
    console.log('Programa encerrado')
}

