//                0        1        2         3        4
//               -5       -4       -3        -2       -1
const nomes = ['maria', 'joao', 'eduardo', 'jorge', 'julia' ]

//nomes.splice(índice, delete, elem1, elem2, elem3)

//pop
const removidos = nomes.splice(4, 1);
console.log(nomes, removidos);

//shift
const removidos2 = nomes.splice(0, 1);
console.log(nomes, removidos2);

//push
const removidos3 = nomes.splice(nomes.length, 0, 'Luiz');
console.log(nomes);

//unshift
const removidos4 = nomes.splice(0, 0, 'Jonas', 'Jaime');
console.log(nomes);