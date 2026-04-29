const prompt = require("prompt-sync")({ sigint: true });
let luas, diagonal_1, diagonal_2, panjang, q, keliling;
diagonal_1 = parseFloat(prompt("Masukan diagonal 1  : "))
diagonal_2 = parseFloat(prompt("Masukan diagonal 2  : "))
panjang = parseFloat(prompt("Masukan panjang  : "))
q = parseFloat(prompt("Masukan q  : "))
luas = 0.5 * diagonal_1 * diagonal_2
keliling = 2 * (panjang + q)

console.log(`\n H A S I L`)
console.log(`luas layang-layang : ${luas} cm2`)
console.log(`keliling layang-layang : ${keliling} cm`)