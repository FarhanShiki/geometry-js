const prompt = require("prompt-sync")({ sigint: true });
let r = parseFloat(prompt("Masukan jari-jari lingkaran : "))
let luas = Math.PI * r * r
let keliling = 2 * Math.PI * r

console.log(`\n H A S I L`)
console.log(`luas lingkaran : ${luas} cm2`)
console.log(`keliling lingkaran : ${keliling} cm`)