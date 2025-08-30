//2 - Calcular a média de 3 notas e mostrar a situação do aluno (aprovado, reprovado ou em exame).
const prompt = require('prompt-sync')();
require('prompt-sync')

let nota1 = Number(prompt('Digite sua primeira nota: '));
let nota2 = Number(prompt('Digite sua segunda nota: '));
let nota3 = Number(prompt('Digite a sua terceira nota: '));

let media = (nota1 + nota2 + nota3) / 3;

console.log(`Média: ${media}`);

if (media >= 0 && media <= 3) {
    console.log('Você está reprovado.');
} else if (media >= 4 && media <= 6) {
    console.log('Você está de recuperação');
} else if (media >= 7) {
    console.log('Você está aprovado');
}

