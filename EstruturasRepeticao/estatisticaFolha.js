/*
Variavel para o totalFolha --> Somatoria Total
Variavel para a Media --> Somatória Total / Elementos do Array
Variavel para o maior --> Comparo com o Maior anterior, e troco se for o caso
Variavel para o menor --> Comparo com o Menor anterior, e troco se for o caso
*/

var salarios = [4838.70, 1500.35, 10525.14, 3250.90, 8512.24]
var totalFolha = 0
var indice = 0
var menorSalario = salarios[0]
var maiorSalario = salarios[0]

do {
    totalFolha += salarios[indice]

    if (salarios[indice] < menorSalario) {
        menorSalario = salarios[indice]
    }

    if (salarios[indice] > maiorSalario) {
        maiorSalario = salarios[indice]
    }

    indice++
} while (indice <= salarios.length - 1)

var mediaSalarios = totalFolha / salarios.length

console.log('Total da Folha: ', totalFolha.toFixed(2))
console.log('Menor Salário: ', menorSalario.toFixed(2))
console.log('Maior Salário: ', maiorSalario.toFixed(2))
console.log('Média Salarial: ', mediaSalarios.toFixed(2))

