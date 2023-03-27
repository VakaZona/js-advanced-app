'use strict';

const now = new Date();
console.log(now);

console.log(new Date('01-01-2022'));
console.log(new Date('01/01/2022'));

console.log(new Date(2024, 11, 31));
console.log(new Date(2024, 11, 51));

console.log(now.getDate());
console.log(now.getDay());
console.log(now.getMonth());
console.log(now.getFullYear());
console.log(now.getMinutes());
console.log(now.getTime());