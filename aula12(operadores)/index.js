//Aritméticos (+ - * /)
// ** (potenciação)
// % (resto da divisão)
// Ordem = --> () --> ** --> *, /, %, -->  +, -
console.log('Aritméticos');
const num1 = 10;
const num2 = 5;
console.log('Soma:', num1 + num2);
console.log('Subtração:', num1 - num2);
console.log('Multiplicação:', num1 * num2);
console.log('Divisão:', num1 / num2);
console.log('Potenciação:', num1 ** num2);
console.log('Resto da Divisão:', num1 % num2);


//Incremento (++, --)
// Pós ou Pré (++contador = Pré) (contador++ = Pós)
console.log('\nIncremento');
let contador = 1;

contador++; //2
contador++; //3
contador++; //4
contador++; //5
console.log('Contador (Incremento):', contador);
contador--; //4
contador--; //3
console.log('Contador (Decremento):', contador);

//Atribuição (+=, *=, -=, /=)
console.log('\nAtribuição');
let contador2 = 2;

contador2 += 2; // 2+2=4
contador2 += 2; // 4+2=6
contador2 *= 3; // 6*3=18
console.log('Contador:', contador2);

//Transformar String em Number
//NaN = Not a Number
const numA = 10; //Number
const numB = parseInt('5'); //Para número Inteiro
const numC = parseFloat('5.7'); //Para número Decimal
const numD = Number('3');//Transforma em número
const numE = Number('Vi');//Continuará dando erro (NaN)

console.log('\n', numA+numB);
console.log(numA+numC);
console.log(numA+numD);
console.log(numA+numE);