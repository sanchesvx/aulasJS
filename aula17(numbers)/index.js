let num1 = 10.5784;
let num2 = 2.5;

console.log(num1.toString() + num2);
// num1 = num1.toString();  <-- ficara como string para sempre
console.log(num1.toString(2)); // mostra em binário
console.log(num1.toFixed(4)); //arredonda e mostra as casas decimais
console.log(Number.isInteger(num1)); // mostra se é um número inteiro

let temp = num1 * 'ola';
console.log(Number.isNaN(temp)); //mostra se é NaN

let num3 = 0.7;
let num4 = 0.1;
 console.log(num3 + num4);

 num3 += num4; // 0.8
 num3 += num4; // 0.9
 num3 += num4; // 1.0

 console.log(num3)

 num3 = parseFloat(num3.toFixed(2)); //parseFloat ou Number
 console.log(num3)

// POSSO FAZER A MULTIPLICAÇÃO POR 100 E AO FINAL DIVIDIR POR 100