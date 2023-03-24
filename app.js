'use strict';

const wetherMap = new Map();
wetherMap.set('London', '10');
wetherMap.set('Moscow', '7');
wetherMap
	.set('Barnaul', '10')
	.set('Minsk', '7');

console.log(wetherMap);
console.log(wetherMap.get('London'));
console.log(wetherMap.get('No'));

console.log(wetherMap.has('London'));

wetherMap.delete('London');

wetherMap.clear();


wetherMap
	.set(1, 5)
	.set(true, 'Yes')
	.set(true, 'Yes!!!')
	.set(false, 'No')
	.set([1, 2, 3], 'array')
	.set({a: 1}, {b: 1});

console.log(wetherMap.size);

console.log(wetherMap);

console.log(wetherMap.get([1, 2, 3]));
console.log(wetherMap.get({a: 1}));

