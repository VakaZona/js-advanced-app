'use strict';

const asyncArrow = async () => {
	const response = await fetch('https://dummyjson.com/products');
	const data = await response.json();
	return data;
}

// console.log('1');
// asyncArrow()
// 	.then(data => console.log(data))
// 	.finally(() => console.log('2'));


(async () => {
	console.log('1');
	const res = await asyncArrow();
	console.log(res);
	console.log('2');
})();