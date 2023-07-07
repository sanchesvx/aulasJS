//               01234567
let umaString = "texto_10";

console.log(umaString[7]);
console.log(umaString[-1]);
console.log(umaString.concat(' em um lindo dia.'));
console.log(umaString.indexOf('Texto'));
console.log(umaString.indexOf('1', 3));
console.log(umaString.match(/[a-z]/g));
console.log(umaString.match(/[a-z]/));
console.log(umaString.search(/x/));
console.log(umaString.replace('10', 'qualquer'));
console.log(umaString.replace(/t/, '9'));
console.log(umaString.replace(/t/g, '9'));
console.log(umaString.length);
console.log(umaString.slice(2, 6));
console.log(umaString.slice(-3));
console.log(umaString.slice(-5, -1));
console.log(umaString.substring(umaString.length - 5, umaString.length -1));
console.log(umaString.split(' '));
console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());
