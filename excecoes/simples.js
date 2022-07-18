'use strict';

var empresa = 'Fleek Cursos'

try {
    // Bloco de Código a ser Testado (try)
    console.log('Execução Antes do Nome')
    nome = 'Marcelo'
    console.log('Execução Após o Nome')
} catch (err) {
    // Executado em caso de erro
    // console.log('Erro Gerado: ', err.message)
    console.log(err.message)
} finally {
    // Executado Sempre
    console.log('Bloco Finally')
}
