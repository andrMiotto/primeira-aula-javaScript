// 7 - Um comerciante comprou um produto e quer vendê-lo com lucro de 45% se o valor da compra for menor que R$20,00; caso contrário, o lucro será de 30%. 
// Entrar com o valor do produto e imprimir o valor da venda.


const prompt = require('prompt-sync')();
require('prompt-sync');

let produto = Number(prompt("Digite o valor do produto: "));


if(produto < 20){
    console.log(`Valor de venda: ${produto*1.45}`);
}else {
    console.log(`Valor de venda: ${produto*1.30}`);
}