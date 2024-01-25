function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") {
        reject('CAI NO ERRO');
        return
    }

    setTimeout(() => {
      resolve(msg.toUpperCase() + ' - Passei na promise');
    }, tempo);
  });
}

//Promise.all - Promise.race - Promisse.resolve - Promise.reject
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
const promises = [
    'primeiro valor',
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 1', 500),
    esperaAi('Promise 1', 1000),
    'Outro valor'
];

Promise.all(promises)
.then(function(valor) {
    console.log(valor);
})
.catch(function(erro) {
    console.log(erro);
})