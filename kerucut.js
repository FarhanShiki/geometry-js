const prompt = require("prompt-sync")({ sigint: true });
let r = parseFloat(prompt("Masukan jari-jari  : "))
let t = parseFloat(prompt("Masukan tinggi : "))
s = Math.sqrt(r * r + t * t)
volume = (1 / 3) * Math.PI * r * r * t
luas_permukaan = Math.PI * r * (r + s)

console.log(`\n H A S I L `)
console.log(`volume : ${volume} cm3`)
console.log(`luas permukaan : ${luas_permukaan} cm2`)