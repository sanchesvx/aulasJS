//Dobre os números

const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 9, 11, 15, 26, 27];

const numerosEmDobro = numeros.map(valor => valor * 2);
console.log(numerosEmDobro);



//Para cada elemento:
//Retorne apenas uma String com o nome da pessoa
//Remova apenas a chave "nome" do objeto
//Adicione uma chave id em cada objeto

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 47 },
    { nome: 'Leticia', idade: 55 },
    { nome: 'Rosana', idade: 19 },
    { nome: 'Wallace', idade: 32 },
    { nome: 'Victor', idade: 21 },
];

const nomes = pessoas.map(obj => obj.nome);
console.log(nomes)

const idades = pessoas.map(obj => ({idade: obj.idade}));
console.log(idades);

const comIds = pessoas.map(function(obj, indice) {
    const newObj = {...obj };
    newObj.id = indice;
    return newObj
});
console.log(comIds);
