const prompt = require("prompt-sync")({ sigint: true });
let volume, luas_alas, tinggi, luas_selebung;
luas_alas = parseFloat(prompt("Masukan luas alas : "))
tinggi = parseFloat(prompt("Masukan tinggi : "))
luas_selebung = parseFloat(prompt("Masukan luas selebung : "))
volume = 1/3 * luas_alas * tinggi
luas_permukaan = luas_alas + luas_selebung

console.log(`\n H A S I L `)
console.log(`volume : ${volume} cm3`)
console.log(`luas permukaan : ${luas_permukaan} cm2`)