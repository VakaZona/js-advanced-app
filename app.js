'use strict';

let weatherMap = new Map([
	['London', 10],
	['Moscow', 7],
	['Paris', 14]
])
//my sposob
let weatherMap2 = new Map();

for (let [key, value] of weatherMap) {
	weatherMap2.set(value, key);
}

console.log(weatherMap2);

//sposob in lesson

weatherMap = new Map([...weatherMap].map(el => el.reverse()));
console.log(weatherMap);