const prompt = require("prompt-sync")({ sigint: true })

let luas, alas, tinggi, keliling;

alas = parseFloat(prompt("Masukkan alas segitiga: "));
tinggi = parseFloat(prompt("Masukkan tinggi segitiga: "));
a = parseFloat(prompt("Masukkan sisi a segitiga: "));
b = parseFloat(prompt("Masukkan sisi b segitiga: "));
c = parseFloat(prompt("Masukkan sisi c segitiga: "));
luas = 0.5 * alas * tinggi;
keliling = a + b + c;

console.log(`Luas segitiga: ${luas}`);
console.log(`Keliling segitiga: ${keliling}`);