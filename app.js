'use strict';

console.log(1);

const boomTimer = setTimeout((message1, message2) => {
	console.log(message1);
	console.log(message2);
}, 1000, 'Bash', 'boom')

clearTimeout(boomTimer);// close timer

console.log(2);