'use strict';

console.log(10 === 10.0);

console.log(0.1 + 0.2 === 0.3);
console.log(0.1 + 0.2);

console.log(Number('10'));
console.log(+'20');

console.log(Number.parseInt('10', 2));
console.log(Number.parseInt('11 sec', 10));

console.log(Number.parseFloat('10.2', 2));
console.log(Number.parseFloat('11.12 sec', 10));

console.log(Number.isNaN(Number('10sdfsd')));
console.log(Number.isNaN(10 / 0));
console.log(10 / 0);
console.log(Number.isFinite(10 / 0));
console.log(Number.isFinite(10 / 1));

console.log(Number.isInteger(10));
console.log(Number.isInteger(10.2));
