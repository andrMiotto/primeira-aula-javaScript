// 13 - Escreva uma função que informe o retorno de um investimento (montante) com base nos
//valores do capital inicial, tempo em meses e taxa de juros mensal.

/*
Use a fórmula: M = C * (1+i)t
Onde:

C = Capital inicial investido
i = Taxa de juros, em percentual
t = Tempo do investimento, em meses
Exiba o resultado com duas casas decimais.
*/

const prompt = require('prompt-sync')();
require('prompt-sync');

let capital = Number(prompt("Digite o capital inicial: "));
let meses = Number(prompt("Digite os meses: "));
let taxa = Number(prompt("Digite a taxa de juros mensal: "));

taxa = taxa / 100;
let montante = capital * Math.pow(1 + taxa, meses);


console.log("Montante final: R$ " + montante.toFixed(2));
