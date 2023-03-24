'use strict';

const wetherMap = new Map([
	['London', 10],
	['Moscow', 12],
]);

console.log(wetherMap);

const weather = {
	london: 10,
	moscow: 7,
	paris: 14
}

console.log(Object.entries(weather));

const weatheMap2 = new Map(Object.entries(weather));
console.log(weatheMap2); 