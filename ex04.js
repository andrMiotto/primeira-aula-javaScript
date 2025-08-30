//4 - Calcular o fatorial de um número.

const prompt = require('prompt-sync')();
require('prompt-sync')


let numeroFatorial = Number(prompt('Digite um numero para saber seu fatorial'));

do {
    numeroFatorial = numeroFatorial * (numeroFatorial - 1);
    console.log(numeroFatorial)
} while (numeroFatorial < 0) {
    console.log('Teste')
}