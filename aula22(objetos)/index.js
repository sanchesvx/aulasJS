function criaPessoa(nome, sobrenome, idade) {
    return{ nome, sobrenome, idade};
}

const pessoa1 = criaPessoa('Vi', 'San', 21);
const pessoa2 = criaPessoa('Jorge', 'José', 77);

console.log(pessoa1.nome, pessoa1.sobrenome);

const pessoa3 = {
    nome: 'Vic',
    sobrenome: 'Sanxi',
    idade: 21,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`)
        console.log(`A minha idade atual é ${this.idade}.`)
    },
    incrementaIdade() {
        this.idade++;
    }
};

pessoa3.fala();
pessoa3.incrementaIdade();
pessoa3.fala();
pessoa3.incrementaIdade();