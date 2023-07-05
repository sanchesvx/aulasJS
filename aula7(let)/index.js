// Não podemos criar variáveis com palavras reservadas por exemplo: if, else
// Variáveis precisam ter nomes significativos por exemplo: nomeCliente
// Não pode começar o nome de variáveis com número
// Não podem conter espaços ou traços
// Utilizamos camelCase por exemplo: nomeCompletoDoCliente
// Case-sensitive por exemplo: nomeCliente é diferente de nomecliente
// Não podemos redeclarar variáveis com let, utilizar let mais de uma vez
// NÃO UTILIZAR VAR, UTILIZAR LET

// let nome = 'Otávio';    <--pode ser utilizado assim ou igual no exemplo abaixo  //String
let nome;
nome = 'Otávio';
console.log(nome, 'nasceu em 1984');
console.log('Em 2000', nome, 'conheceu Maria');
console.log(nome, 'casou-se com maria em 2012');
console.log('Maria teve 1 filhos com', nome, 'em 2015');
console.log('O filho de', nome, 'se chama eduardo');

nome = 'José';
console.log(nome, 'nasceu em 1984');
console.log('Em 2000', nome, 'conheceu Maria');
console.log(nome, 'casou-se com maria em 2012');