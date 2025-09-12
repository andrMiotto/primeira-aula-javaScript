// 1- Desenvolva um algoritmo que leia um número inteiro e imprima seu sucessor e seu antecessor na tela.

const prompt = require('prompt-sync')();
require('prompt-sync');

let numero = Number(prompt("Digite um numero para saber seu sucessor e seu antecessor: "));


let antecessor = numero - 1;
let sucessor = numero + 1;

console.log(antecessor);
console.log(sucessor);