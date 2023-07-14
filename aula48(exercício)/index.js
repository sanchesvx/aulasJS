// rescreva uma função que recebe um número e retorne o seguinte
// Número é divisível por 3 = FIZZ
// Número é divisível por 5 = BUZZ
// Número é divisível por 3 e 5 = FIZZBUZZ
// Número NÃO é divsível por 3 e 5 = Retorna o próprio número
// Checar se o número é realmente um número = Retorna o próprio número
// Use a função com numero de 0 a 100

function fizzBuzz(numero) {
    if (typeof numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    return numero;
}

for ( let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i))
}