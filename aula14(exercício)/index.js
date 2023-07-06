let varA = 'a'; //b
let varB = 'b'; //c
let varC = 'c'; //a

const varATemp = varA;
varA = varB;
varB = varC;
varC = varATemp;

// Outro método de resolução --> [varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC)