// 11 - Faça uma função que recebe um array de qualquer tamanho e ordene seus elementos na ordem crescente.

const prompt = require('prompt-sync')();
require('prompt-sync');

let numeros = [];

while (true) {
    let entrada = prompt("Digite um número (ou 'sair' para parar): ");
    
    if (entrada.toLowerCase() === "sair") {
        break; 
    }

    let numero = Number(entrada);
    numeros.push(numero);

}



console.log(numeros.sort((a,b) => a- b));
