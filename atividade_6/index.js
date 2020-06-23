let rs = require("readline-sync");

// ## Faça o código ##
let nome = rs.question("Qual seu nome? ");
let sobrenome = rs.question("Qual seu sobrenome? ");

console.log('Seu nome tem '  + nome.length + ' caracteres' );
console.log('Seu sobrenome tem '  + sobrenome.length + ' caracteres' );

if(sobrenome.length > nome.length){
    console.log('seu sobrenome tem mais caracteres que o seu nome');
}
else console.log('seu nome tem mais caracteres que seu sobrenome');
