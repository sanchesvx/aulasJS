//Some todos os números (reduce)
//Retorne um array com os pares (filter)
//Retorne um array com o dobro de valores (map)
const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 9, 11, 15, 26, 27];

const total = numeros.reduce(function (acumulador, valor) {
  acumulador += valor;
  return acumulador;
}, 0);
console.log(total);




//Retorne a pessoa mais velha
const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 47 },
  { nome: "Leticia", idade: 55 },
  { nome: "Rosana", idade: 19 },
  { nome: "Wallace", idade: 32 },
  { nome: "Victor", idade: 21 },
];

const maisVelha = pessoas.reduce(function(acumulador, valor) {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelha);