//atividade 04 - informar o Signo

let rs = require("readline-sync");

let dia = rs.question("Qual o dia do Seu Aniversario? ");
let mes = rs.question("Qual o Mes do seu aniversario? ");

dia = Number(dia);
mes = Number(mes);

let Capricornio = mes === 1 && dia <= 20;
let Aquario = mes === 2 && dia <= 19;
let Peixe = mes === 3 && dia <= 20;
let Aries = mes === 4 && dia <= 20;
let Touro = mes === 5 && dia <= 20;
let Gemeos = mes === 6 && dia <= 20;
let Cancer = mes === 7 && dia <= 21;
let Leao = mes === 8 && dia <= 22;
let Virgem = mes === 9 && dia <= 22;
let Libra = mes === 10 && dia <= 22;
let Escorpiao = mes === 11 && dia <= 21;
let Sagitario = mes === 12 && dia <= 21;

if (Capricornio) {
    console.log('Capricornio');
}
if (Aquario) {
    console.log('Aquario');
}
if (Peixe) {
    console.log('Peixe');
}
if (Aries) {
    console.log('Aries');
}
if (Touro) {
    console.log('Touro');
}
if (Gemeos) {
    console.log('Gemeos');
}
if (Cancer) {
    console.log('Cancer');
}
if (Leao) {
    console.log('Leao');
}
if (Virgem) {
    console.log('Virgem');
}
if (Libra) {
    console.log('Libra');
}
if (Escorpiao) {
    console.log('Escorpiao');
}
if (Sagitario) {
    console.log('Sagitario');
}
else console.log("datainvalida");