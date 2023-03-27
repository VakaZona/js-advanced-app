'use strict';

const max = 2 ** 53 - 1;
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(max);
console.log(max + 1);//no job

console.log(1241241241241513541412412412515124215125412515n);
console.log(BigInt(1241241241241513541412412412515124215125412515));
console.log(BigInt('1241241241241513541412412412515124215125412515'));