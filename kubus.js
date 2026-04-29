const prompt = require("prompt-sync")({ sigint: true });
let volume, sisi, luaspermukaan;
sisi = parseFloat(prompt("Masukan sisi: "))
volume = sisi * sisi * sisi
luaspermukaan = 6 * sisi * sisi

console.log(`\n H A S I L`)
console.log(`volume  : ${volume} cm3`)
console.log(`luas permukaan : ${luaspermukaan} cm2`)