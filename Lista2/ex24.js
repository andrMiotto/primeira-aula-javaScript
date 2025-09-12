//24 - Crie uma função chamada "gerarNumeroAleatorio" que recebe um número mínimo e um número
//máximo como parâmetros e retorna um número aleatório entre esses dois números.


const prompt = require('prompt-sync')();

let min = Number(prompt("Digite um número mínimo: "));
let max = Number(prompt("Digite um número máximo: "));

function gerarNumero(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("Número aleatório:", gerarNumero(min, max));
