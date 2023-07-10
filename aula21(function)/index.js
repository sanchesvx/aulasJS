function saudacao(nome) {
    return `Bom dia ${nome}!` ;
}

const variavel = saudacao('Vi');
console.log(variavel);
//-------------------------------------
function soma(x, y) {
    const resultado = x + y;
    return resultado;       // Nada será executado se estiver após o RETURN
}

console.log(soma(2, 2));
console.log(soma(7, -2));
//---------------------------------------

const raiz = function (n) {
    return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(16));
//--------------------------------------------
//arrow function
const raiz2 =  n => n ** 0.5

console.log(raiz2(9));
console.log(raiz2(16));
