const prompt = require("prompt-sync") ({ sigint: true});
// luas jajargenjang
let luas, alas, tinggi, keliling;
alas = parseFloat(prompt("Masukan alas : "))
tinggi = parseFloat(prompt("Masukan tinggi  : "))
sisi_miring = parseFloat(prompt("Masukan sisi_miring  : "))
luas = alas * tinggi
keliling = 2 * (alas + sisi_miring)

console.log(`\n===== Hasil =====`)
console.log(`luas  : ${luas} cm2`)
console.log(`keliling : ${keliling} cm`)