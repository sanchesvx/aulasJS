// defineProperty - defineProperties

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave
        value: estoque, // valor
        writable: false, // pode alterar
        configurable: true // pode configurar
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
console.log(Object.keys(p1));

/*function Produto(nome, preco, estoque) {

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave
        value: estoque, // valor
        writable: false, // pode alterar
        configurable: true // pode configurar
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, //mostra a chave
            value: nome, // valor
            writable: false, // pode alterar
            configurable: true // pode configurar
    },
        preco: {
            enumerable: true, //mostra a chave
            value: preco, // valor
            writable: false, // pode alterar
            configurable: true // pode configurar
})
}*/