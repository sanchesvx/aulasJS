const pessoa = {
    nome: 'Victor',
    sobrenome: 'Sanches',
    idade : 21,
    endereco:{
        rua: 'Av Brasil',
        numero: 320
    }
};

// Atribuição via desestruturação
const { nome, sobrenome, endereco: { rua, numero }, endereco } = pessoa;
console.log(nome, sobrenome);
console.log(rua, numero, endereco)