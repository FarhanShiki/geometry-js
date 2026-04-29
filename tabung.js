const prompt = require("prompt-sync")({ sigint: true });
let r = parseFloat(prompt("Masukan jari-jari : "))
let t = parseFloat(prompt("Masukan tinggi : "))
let volume = Math.PI * r * r * t
let luas_permukaan = 2 * Math.PI * r * (r + t)

console.log(`\n H A S I L `)
console.log(`volume : ${volume} cm3`)
console.log(`luas permukaan : ${luas_permukaan} cm2`)