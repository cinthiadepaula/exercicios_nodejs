// ## Importe a biblioteca ##
let rs = require("readline-sync");


// ## Faça o código ##
//atividade 01

let nome = rs.question("Qual seu nome completo? ");
let numvoo = rs.question("Qual o numero do seu voo?  ");

let fileira = rs.question("Qual a fileira que voce seja sentar? A, B, C, D ou F: ");

console.log(" \n Nome: " + nome, "\n Número do Voo: "+ numvoo, "\n Fileira: " + fileira);