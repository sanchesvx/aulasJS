//Jaime Miranda tem 33 anos pesa 94 kg 
//Tem 1.8 de altura e IMC de 29.012345679012345
//Jaime nasceu em 1993.

const nome = 'Jaime';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 94;
const alturaEmM = 1.80;
let imc;  // IMC= Peso/(altura*altura)
let anoNascimento;

imc = peso/(alturaEmM*alturaEmM);
anoNascimento = 2023-idade;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg') 
console.log('Tem', alturaEmM, 'de altura e IMC de', imc);
console.log(nome, 'nasceu em', anoNascimento);

//TEMPLATE STRINGS
console.log(`Tem ${alturaEmM} de altura e IMC de ${imc}`);