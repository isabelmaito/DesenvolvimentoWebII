"use strict";
var a = 5;
var b = 10;
const x = 10; // não consigo alterar o valor da variável, é constante, imutável.
if (a == 5) {
    let a = 4; // let é sempre escopo local, no caso dentro desse if
    var b = 1; // var é sempre escopo global
    console.log(a); //4
    console.log(b); //1
}
console.log(a); // 5 --> não altera o valor
console.log(b); // 1 --> altera o valor
