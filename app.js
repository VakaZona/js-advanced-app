'use strict';

Promise.resolve('Instant').then(data => console.log(data));

const prom = new Promise((resolve) => {
	console.log('Constructor')
	setTimeout(() => {
		resolve('Timer');
	}, 1000)
}) 
prom.then(data => console.log(data))


