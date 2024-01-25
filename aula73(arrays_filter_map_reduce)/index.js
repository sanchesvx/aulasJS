//Retorne a soma do dobro de todos os pares
// ->filtrar pares
// ->dobrar valores
// ->reduzir(somar tudo)
const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 9, 11, 15, 26, 27];

const numerosPares = numeros
    .filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((ac,valor) => ac + valor);

console.log(numerosPares);