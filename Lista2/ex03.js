// 3 - Desenvolva um algoritmo que calcule a distância percorrida de um veículo conforme os dados informados: Tempo em horas e velocidade média.
const prompt = require('prompt-sync')();
require('prompt-sync');



let tempo = Number(prompt("Digite o tempo em horas que levou: "));

let velocidade = Number(prompt("Digite a velocidade média: "));

let resultado = velocidade*tempo;
console.log(resultado);