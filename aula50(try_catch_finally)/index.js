try {
  // é executada quando não há erros
} catch (e) {
  // é executada quando há erros
} finally {
  // sempre
}

try {
  console.log("abri um arquivo");
  console.log("manipulei o arquivo e gerou um erro");
  console.log("fechei o arquivo");
} catch (e) {
  console.log("tratando o erro");
} finally {
  console.log("Finally: Sempre sou executado");
}


function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
    }
    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour : '2-digit',
        minute : '2-digit',
        second : '2-digit',
        hour12: false
    });
}
try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora(11);
    console.log(hora);
} catch (e) {

} finally {
    console.log('Tenha um bom dia.')
}
