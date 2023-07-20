function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,

        //GETTER
        nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        //SETTER
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },
        
        fala(assunto) {
            return `${this.nome} está ${assunto}.`;
        },

        altura : a,
        peso: p,

        //GETTER
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }

    };
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
p1.nomeCompleto = 'Maria Oliveira Silva';
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.imc);
