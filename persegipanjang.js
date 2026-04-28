const prompt = require("prompt-sync")({sigint: true });

let sisi, luas, keliling, volume

sisi = parseInt(prompt('Sisi persegi : '))
luas = sisi * sisi
keliling = 4 * sisi
volume = sisi * sisi * sisi

console.log(`\n===== Hasil =====`)
console.log(`luas           : ${luas} cm2`)
console.log(`keliling       : ${keliling} cm2`)
console.log(`volume         : ${volume} cm`)