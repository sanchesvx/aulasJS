//filter -> sempre retorna um array com a mesma quantidade ou menos de elementos

//retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 9, 11, 15, 26, 27];

const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log('Retorne os números maiores que 10', numerosFiltrados);




//Retorne as pessoas cujo o nome tem 7 letras ou mais
//Retorne as pessoas com mais de 50 anos
//Retorne as pessoas em que o nome termina com A

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 47 },
    { nome: 'Leticia', idade: 55 },
    { nome: 'Rosana', idade: 19 },
    { nome: 'Wallace', idade: 32 },
    { nome: 'Victor', idade: 21 },
];

const pessoasNomeGrande = pessoas.filter(obj => obj.nome.length >= 7);
console.log('\nRetorne as pessoas cujo o nome tem 7 letras ou mais', pessoasNomeGrande);

const pessoasMaisCinquentaAnos = pessoas.filter( obj=> obj.idade > 50);
console.log('\nRetorne as pessoas com mais de 50 anos', pessoasMaisCinquentaAnos)

const nomeTerminadoEmA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log('\nRetorne as pessoas em que o nome termina com A', nomeTerminadoEmA);