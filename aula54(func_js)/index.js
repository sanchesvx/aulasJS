// Declaração de função (function hoisting)
falaOi();
function falaOi() {
    console.log('hoisting');
}

// First-class objects (objetos de primeira classe)
// function expression

const souUmDado = function() {
    console.log('sou um dado');
};
souUmDado();

// Arrow Function

const arrowFunction = () => {
    console.log('sou uma arrow function');
};
arrowFunction();

// dentro de um objeto

const obj = {
    falar() {
        console.log('estou falando')
    }
};
obj.falar();