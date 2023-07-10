//                 0       1        2
const alunos = ['Luiz', 'Maria', 'João'];
console.log(alunos);
console.log(alunos[1]);

alunos[0] = 'Eduardo'; // Altera
alunos[3] = 'Luiza'; // Adiciona
console.log(alunos);

console.log(alunos.length); // Tamanho
alunos.push('Jorge'); // Adiciona ao final
alunos.unshift('Marcos'); // Adiciona ao início
alunos.unshift('Carlos'); // Adiciona ao início
alunos.pop(); // Remove o último
alunos.shift(); // Remove o primeiro
const removido = alunos.pop();
delete alunos[1]; // Deletar
console.log(alunos.slice(0, 3)); // Pegar por indice
console.log(typeof alunos);
console.log(removido);
console.log(alunos);
console.log(alunos instanceof Array);

