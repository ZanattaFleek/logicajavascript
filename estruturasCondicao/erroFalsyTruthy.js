var x = false;
var numero = 10000;
var resultado = (x * numero);

console.log('Tipo de Resultado: ', typeof resultado);
console.log('Conteúdo de Resultado: ', resultado);

if (resultado > 100) {
    console.log('Serei executado se truthy...');
} else {
    console.log('Serei executado se falsy...');
}

