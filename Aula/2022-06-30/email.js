var email = "contato@fleekcursos.com.br"

var posicaoArroba = email.indexOf('@')

var dominio = email.substring(posicaoArroba + 1)

console.log(dominio)

// console.log(email.substring(email.indexOf('@')+1))