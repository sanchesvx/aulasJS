// ...REST, ...SPREAD

const numbers = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const [firstNumber, secondNumber, thirdNumber, ...rest] = numbers;
console.log(firstNumber, secondNumber, thirdNumber);
console.log(rest);

//                    0          1          2
//                 0  1  2    0  1  2    0  1  2
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]]
const [list1, list2, list3] = numeros;
console.log(list3[2]);


/*const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const firstNumber = numbers[0];
console.log(firstNumber);
*/

/*
let a = 'A';
let b = 'B';
let c = 'C';

const words = [b, c, a]
[a, b, c] = [1, 2, 3];

console.log(a, b, c)
*/
