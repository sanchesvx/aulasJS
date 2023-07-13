// For in -> lê os indices ou chaves do objeto

const pessoa = {
    nome: 'luiz',
    sobrenome: 'otavio',
    idade: 30
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}