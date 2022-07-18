var cadastro = {
    escola: 'Fleek Cursos'
}

function converterEmMaiusculo(objCadastro) {
    objCadastro.escola = objCadastro.escola.toUpperCase()
}

cadastro.endereco = 'Av. 21 de Abril'
converterEmMaiusculo(cadastro)

console.log('Conteúdo de Cadastro: ', cadastro.escola)

