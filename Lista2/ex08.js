// 8 - Desenvolva um algoritmo que leia a idade de uma pessoa e informe a sua classe eleitoral.

// A - Não-eleitor (abaixo de 16 anos)
// B - Eleitor obrigatório (entre 18 e 65 anos)
// C - Eleitor facultativo (entre 16 e 18 e maior de 65 anos)


const prompt = require('prompt-sync')();
require('prompt-sync');


let idade = Number(prompt("Digite sua idade: "));

if(idade < 16){
    console.log(`Com ${idade} anos você não é eleitor!!!`);
}else if(idade >= 18 && idade <= 65){
        console.log(`Com ${idade} anos você  é eleitor obrigatórtio!!!`);
}else if(idade >= 16 && idade < 18 || idade >65){
        console.log(`Com ${idade} anos você  é eleitor facultativo!!!`);

}