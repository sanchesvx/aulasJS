function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random()*(max-min)+min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject)=> {
        if(typeof msg !== 'string') reject('BAD VALUE');

        setTimeout(() => {
            resolve(msg);
        }, tempo)
    });
}

esperaAi('conexao com o bd', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('buscando dados', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi(2222, rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
    })
    .then(() => {
        console.log('exibe os dados na tela');
    })
    .catch(e => {
        console.log('ERRO: ', e)
    });

    console.log('isso aqui será exibido antes das promises');

