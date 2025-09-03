//5 - Verificar se um ano é bissexto.

const prompt = require('prompt-sync')();
require('prompt-sync');


let anoBissexto = Number(prompt("Digite um ano para saber se é bissexto: "));

function verificarAno(n) {

    if ((n % 4 === 0 && n % 100 !== 0) || (n % 400 === 0)) {
        return `O ano ${anoBissexto} é um ano bissexto`;
    } else {
        return `O ano ${anoBissexto} não é um ano bissexto`;

    }
}

console.log(verificarAno(anoBissexto));
















