const prompt = require("prompt-sync")({sigint :true });

let p, l, t, luasPermukaan, volumeBalok, kelilingBalok

p = parseFloat(prompt("Panjang balok (p)"))
l = parseFloat(prompt("Lebar balok (l)"))
t = parseFloat(prompt("Tinggibalok (t)"))

luasPermukaan = 2 * (p * l + p * t + l * t)
volumeBalok = p * l * t 
kelilingBalok = 4 * (p + l + t)

console.log(`\n===== Hasil =====`)
console.log(`luasPermukaan      : ${luasPermukaan} cm2`)
console.log(`volumeBalok        : ${volumeBalok} cm2`)
console.log(`kelilingBalok      : ${kelilingBalok} cm`)