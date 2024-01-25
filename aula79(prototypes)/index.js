// Construtora -> (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => this.nome + '' + this.sobrenome;
}


Pessoa.prototype.nomeCompleto = function ()  {  // _proto_ = Pessoa.prototype
    return this.nome + ' ' + this.sobrenome;
}

const pessoa1 = new Pessoa('Victor', 'S.'); // <- Pessoa = Função construtora
const pessoa2 = new Pessoa('Zeca', 'N.'); // <- Pessoa = Função construtora
const data = new Date(); // <- Data = Função construtora

console.dir(pessoa1);
console.dir(pessoa2);
console.dir(data);