//4 - Calcular o fatorial de um número.

const prompt = require('prompt-sync')();
require('prompt-sync')


let numeroFatorial = Number(prompt('Digite um numero para saber seu fatorial: '));
let number = numeroFatorial;



  let fatorial = number * fatorial(number - 1);


console.log(fatorial);
