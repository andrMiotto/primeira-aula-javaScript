// 5 - Desenvolva um algoritmo que leia 2 números inteiros e some. Se a soma for maior que 10, mostre o resultado da soma.


const prompt = require('prompt-sync')();
require('prompt-sync');


let numero1 = Number(prompt("Digite um numero: "));
let numero2 = Number(prompt("Digite outro numero: "));

let soma = numero1+numero2;

if(soma > 10){
console.log(`A soma de ${numero1} + ${numero2} é ${soma}. Maior que 10`);
}else{
    console.log(`A soma de ${numero1} + ${numero2} é ${soma}. É menor ou igual a 10`)
}