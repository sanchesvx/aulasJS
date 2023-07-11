/*
const data = new Date(0);
const tresHoras = 60 * 60 * 3 * 1000;
const umDia  = 60 * 60 *24 * 1000;
console.log(data.toString());
*/

//Meses 0-11
/*
const dataUm = new Date(2023, 3, 20, 15, 14, 27);  //a, m, d, h, M, s, ms
console.log(dataUm.toString());
*/

const data = new Date('2023-03-20 20:20:59');
console.log('Dia: ', data.getDate());
console.log('Mês: ', data.getMonth() + 1); // Mês começa do zero
console.log('Ano: ', data.getFullYear());
console.log('Hora: ', data.getHours());
console.log('Minutos: ', data.getMinutes());
console.log('Segundos: ', data.getSeconds());
console.log('MS: ', data.getMilliseconds());
console.log('Dia da Semana: ', data.getDay()); // 0 - Domingo, 6 - Sábado
console.log(data.toString());
console.log(Date.now())  //1679437370849

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(dataFunc) {
    const dia = zeroAEsquerda(dataFunc.getDate());
    const mes = zeroAEsquerda(dataFunc.getMonth() + 1);
    const ano = zeroAEsquerda(dataFunc.getFullYear());
    const hora = zeroAEsquerda(dataFunc.getHours());
    const min = zeroAEsquerda(dataFunc.getMinutes());
    const seg = zeroAEsquerda(dataFunc.getSeconds());
    
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;

}

const dataFunc = new Date();
const dataBrasil = formataData(dataFunc);
console.log(dataBrasil);