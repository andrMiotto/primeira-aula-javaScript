// 15 - Crie um objeto chamado "pessoa" que tenha as propriedades "nome", "idade" e "profissão".
//Atribua valores a essas propriedades e imprima o objeto no console.

//16 - Adicione uma nova propriedade chamada "hobbies" ao objeto "pessoa" criado anteriormente.
//Atribua a essa propriedade um array de hobbies que você gosta. Imprima o objeto no console.

const prompt = require('prompt-sync')();

const pessoa = new Object();
pessoa.nome = String(prompt("Digite o nome da pessoa: "));
pessoa.idade = Number(prompt("Digite a idade da pessoa: "));
pessoa.profissao = String(prompt("Digite a profissão da pessoa: "));
pessoa.hobbie = String(prompt("Digite um hobbie da pessoa: "));

const hobbies = ["Luta", "Academia", "Basquete"];

hobbies.push(pessoa.hobbie);

console.log("Pessoa:", pessoa);
console.log("Hobbies:", hobbies);
