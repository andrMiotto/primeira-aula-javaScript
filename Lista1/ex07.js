// 7 - Verificar se uma palavra é um palíndromo.

const prompt = require('prompt-sync')();

let palavra = prompt("Digite uma palavra para saber se ela é um palíndromo: ");

let palMinuscula = palavra.toLowerCase();

let invertida = palMinuscula.split('').reverse().join('');

if (palMinuscula === invertida) {
    console.log(`A palavra "${palavra}" é um palíndromo`);
} else {
    console.log(`A palavra "${palavra}" não é um palíndromo`);
}
