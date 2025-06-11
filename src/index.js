#!/usr/bin/env node

const f = require("./fibonacci");
const ms = require("./mergeSort");

const iter = 15;

const fibsRes = f.fibs(iter).toString();
const fibsRecRes = f.fibsRec(iter).toString();

console.log("...fibonacci...");

console.log(`Number of iterations: ${iter}`);
console.log(`Non recursive fibonacci: ${fibsRes}`);
console.log(`Recursive fibonacci: ${fibsRecRes}`);

console.log("");

console.log("...merge sort...");

const arr = [3, 2, 1, 13, 8, 5, 0, 1];
const arr2 = [105, 79, 100, 110];

console.log(`arr: ${arr}`);
console.log(`sorted arr: ${ms.mergeSort(arr)}`);
console.log(`arr2: ${arr2}`);
console.log(`sorted arr2: ${ms.mergeSort(arr2)}`);
