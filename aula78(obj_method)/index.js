/*
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
... (spread)

Já visto
Object.keys (retorna as chaves)
Object.frezze (congela o objeto)
Object.defineProperty (define uma propriedade)
Object.defineProperties (define várias propriedades)
*/

const produto = { nome: 'Produto' , preco: 1.8 };
const caneca = {
    ...produto,
    material : 'porcelana'
};

caneca.nome = 'Vi';
caneca.preco = 2;
console.log(produto);
console.log(caneca);
