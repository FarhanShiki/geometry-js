const prompt = require("prompt-sync")({ sigint: true });
let r = parseFloat(prompt("Masukan jari-jari : "))
volume = (4 / 3) * Math.PI * r * r * r
luas_permukaan = 4 * Math.PI * r * r

console.log(`\n H A S I L `)
console.log(`volume : ${volume} cm3`)
console.log(`luas permukaan : ${luas_permukaan} cm2`)