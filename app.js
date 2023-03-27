'use strict';

let a = { a: 1 };
let b = { b: 1 };

const map = new WeakMap();
map.set(a, 'test A');
map.set(b, 'test B');
console.log(map);
console.log(map.get(a));
console.log(map.has(a));

a = null;
setTimeout(() => {
	console.log(map);
}, 1000)

let cache = new WeakMap();

function getValue(obj) {
	if (!cache.has(obj)) {
		const result = 1;
		cache.set(obj, result)
	}
	return cache.get(obj);
}

const res = getValue(b);
console.log(res);

