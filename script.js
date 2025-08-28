/* ==============================
   DECLARAÇÃO DE VARIÁVEIS
   ============================== */
let nome = "André"; // variável do tipo string (let = pode ser reatribuída)

// typeof → operador que retorna o tipo da variável
console.log(typeof (nome)); // string

// Reatribuição → agora a mesma variável passa a ser number (tipagem dinâmica)
nome = 12;
console.log(typeof (nome)); // number


/* ==============================
   TEMPLATE STRING (Interpolação)
   ============================== */
// Uso da crase (` `) para inserir variáveis dentro da string
const mensagem = `Olá ${nome} bem vindo`;
console.log(mensagem);


/* ==============================
   EXPRESSÕES ARITMÉTICAS
   ============================== */
const a = 2; // constante numérica
const b = 2; // constante numérica

// Interpolação + soma dentro de template string
const soma = `A soma de ${a} + ${b} é igual a ${a + b}`;
console.log(soma);


/* ==============================
   OPERADOR TERNÁRIO
   ============================== */
// Estrutura condicional resumida (condição ? valorSeVerdadeiro : valorSeFalso)
let zika = 10;
let resultado = zika > 5 ? 'a é maior que 5' : 'a não é maior que 5';
console.log(resultado);


/* ==============================
   ESTRUTURA DE REPETIÇÃO (for)
   ============================== */
// for(inicialização; condição; incremento)
for (let i = 0; i < 2; i++) {
    console.log(i); // imprime 0 e 1
}


/* ==============================
   OPERADORES LÓGICOS
   ============================== */
let x = 10;
let y = 20;

// && → operador lógico AND (só executa se a condição for true)
(x < y) && console.log('1'); // imprime "1"
(x > y) && console.log('2'); // não executa

// || → operador lógico OR (executa se a primeira condição for falsa)
(x < y) || console.log('3'); // não executa porque já é true
(x > y) || console.log('4'); // executa porque é false


/* ==============================
   FUNÇÕES
   ============================== */
// Declaração de função nomeada
function funcaoSoma(param1, param2) {
    return param1 + param2; // return → retorna o valor
}

// Chamada da função com argumentos
console.log("Funções");
console.log(funcaoSoma(3, 2)); // imprime 5


