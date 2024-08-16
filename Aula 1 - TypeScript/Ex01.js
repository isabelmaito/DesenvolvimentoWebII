"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promptSync = require("prompt-sync");
var prompt = promptSync();
//const numero : number = Number(prompt("Digite um numero:"))
const a = prompt('Insira um valor: ');
const b = parseInt(a);
console.log(`Antecessores: \n ${b - 1} e ${b - 2}`);
console.log(`Sucessores: \n ${b + 1} e ${b + 2}`);
