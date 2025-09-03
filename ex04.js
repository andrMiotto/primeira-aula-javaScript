//4 - Calcular o fatorial de um número.

const prompt = require('prompt-sync')();
require('prompt-sync')


let numeroFatorial = Number(prompt('Digite um numero para saber seu fatorial: '));
let number = numeroFatorial;

function fatorialRecursivo(n) {
  if (n == 0 || n == 1) {
    return 1;
  }
  return n * fatorialRecursivo(n - 1);
}

console.log(fatorialRecursivo(numeroFatorial));
