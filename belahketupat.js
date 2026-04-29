const prompt = require("prompt-sync")({ sigint: true });
let luas, diagonal_1, diagonal_2, sisi, keliling;
diagonal_1 = parseFloat(prompt("Masukan diagonal 1  : "))
diagonal_2 = parseFloat(prompt("Masukan diagonal 2  : "))
sisi = parseFloat(prompt("Masukan sisi  : "))
luas = 0.5 * diagonal_1 * diagonal_2
keliling = 4 * sisi

console.log(`\n H A S I L`)
console.log(`luas belah ketupat : ${luas} cm2`)
console.log(`keliling belah ketupat : ${keliling} cm`)
