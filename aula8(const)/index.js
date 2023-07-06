// Não podemos criar constantes com palavras reservadas por exemplo: if, else
// constantes precisam ter nomes significativos por exemplo: nomeCliente
// Não pode começar o nome de constante com número
// Não podem conter espaços ou traços
// Utilizamos camelCase por exemplo: nomeCompletoDoCliente
// Case-sensitive por exemplo: nomeCliente é diferente de nomecliente
// Não pode modificar o calor de uma constante
// NÃO UTILIZAR VAR, UTILIZAR CONST

// + - * /
//String = Text   Number = Número
//const primeiroNumero = '5'; <-- é uma String
const primeiroNumero = 5;
const segundoNumero = 10;
const terceiroNumero = '5';

const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;

let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;

console.log(resultadoDuplicado);
console.log(resultadoTriplicado);
console.log(typeof(primeiroNumero));
console.log(typeof(terceiroNumero));