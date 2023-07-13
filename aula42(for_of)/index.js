const nomes =['Luiz' , 'otavio', 'henrique']

for (let valor of nomes) {
    console.log(valor);
}

nomes.forEach(function(valor, indice, array){
    console.log(valor, indice, array)
})

// For clássico - Geralmente com iteráveis (arrays ou strings)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)