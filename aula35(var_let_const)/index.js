const verdadeira = true;

// let tem escopo de bloco {... bloco }
// var só tem escopo de função

let nome = 'Vi'; //criando
var nome2 = 'Vi';

if (verdadeira) {
    let nome = 'Sanches'
    var nome2 = 'Zeca'
if (verdadeira) {
    var nome2 = 'Sanches'
    let nome = 'Moro' // criando
    console.log(nome,nome2)
}
} 
console.log(nome,nome2)




function sayHi () {
    

    if (verdadeira) {
        let name = 'Luiz';
        var surname = 'Miranda';
        console.log(name, surname); 
           
    }
    console.log( /*name*/ surname); //    <-- name não aparece por ser LET
}

sayHi();


console.log(surname1);



var surname1 = 'Costa' // se usar let resultará em erro