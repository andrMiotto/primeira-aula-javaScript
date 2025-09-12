//2 - Desenvolva um algoritmo que receba um valor qualquer e imprima esse valor com reajuste de 15%.

const prompt = require('prompt-sync')();
require('prompt-sync');

let numero = Number(prompt("Digite um numero: "));

porcentagem = numero*0.15;

console.log(numero-porcentagem);


