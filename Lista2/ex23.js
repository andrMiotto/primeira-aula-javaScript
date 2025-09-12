//23 - Crie uma função chamada "gerarSenha" que recebe um número como parâmetro e retorna uma
//senha aleatória com esse número de caracteres.

const prompt = require('prompt-sync')();

function gerarSenha(numero) {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let senha = "";

    for (let i = 0; i < numero; i++) {
        let indice = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[indice];
    }

    return senha;
}

let size = Number(prompt("Digite a quantidade de caracteres: "));

console.log("Senha gerada:", gerarSenha(size));
