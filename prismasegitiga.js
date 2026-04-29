const prompt = require("prompt-sync")({ sigint: true });
let luas_permukaan, tinggi, keliling;
luas_alas = parseFloat(prompt("Masukan luas_alas : "))
tinggi = parseFloat(prompt("Masukan tinggi : "))
keliling = parseFloat(prompt("Masukan keliling : "))
volume = luas_alas * tinggi
luas_permukaan = (2 * luas_alas) + (keliling * tinggi)

console.log(`\n H A S I L `)
console.log(`volume : ${volume} cm3`)
console.log(`luas permukaan : ${luas_permukaan} cm2`)