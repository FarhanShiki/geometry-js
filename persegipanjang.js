const prompt = require("prompt-sync")({sigint: true });

let p = parseFloat(prompt("Masukan panjang panjang : "))
let l = parseFloat(prompt("Masukan lebar lebar : "))    

let luas = p * l
let keliling = 2 * (p + l)

console.log('\n HASIL ')
console.log("luas:" + luas);
console.log("keliling:" + keliling);
