#!/usr/bin/env node

const f = require("./fibonacci");

const iter = 15;

const fibsRes = f.fibs(iter).toString();
const fibsRecRes = f.fibsRec(iter).toString();
const isEqual = fibsRes === fibsRecRes;

console.log(`Number of iterations: ${iter}`);
console.log(`Non recursive fibonacci: ${fibsRes}`);
console.log(`Recursive fibonacci: ${fibsRecRes}`);
console.log(`f.fibs(${iter}) === f.fibsRec(${iter}) ? ${isEqual}`);
