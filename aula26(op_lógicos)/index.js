/*
Operadores Lógicos
&& -> AND -> E   --> Tudo true pra retornar true
|| -> OR  -> OU  --> Pelo menos um true para retornar true
!  -> NOT -> NÃO --> Negação
*/

const expressaoAndFalse = true && true && true && false;
const expressaoAndTrue = true && true && true && true;
const expressaoOrFalse = true || true || true || false;
const expressaoOrTrue = true || true || true || true;


console.log(expressaoAndFalse);
console.log(expressaoAndTrue);
console.log(expressaoOrFalse);
console.log(expressaoOrTrue);
