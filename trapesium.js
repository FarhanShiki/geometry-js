const prompt = require("prompt-sync")({ sigint: true });
let luas, a, b, c, d, tinggi, keliling;
a = parseFloat(prompt("Masukan a  : "));
b = parseFloat(prompt("Masukan b  : "));
c = parseFloat(prompt("Masukan c  : "));
d = parseFloat(prompt("Masukan d  : "));
tinggi = parseFloat(prompt("Masukan tinggi : "));
luas = 0.5 * (a + b) * tinggi;
keliling = a + b + c + d;

console.log(`\n===== Hasil =====`)
console.log(`luas trapesium : ${luas} cm2`)
console.log(`keliling trapesium : ${keliling} cm`)