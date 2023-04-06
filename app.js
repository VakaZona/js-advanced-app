'use strict';

function generate(event) {
	console.log(event.target.getBoundingClientRect())

	console.log(window.pageXOffset);
	console.log(window.pageYOffset);
	console.log(document.documentElement.clientWidth);
	console.log(document.documentElement.clientHeight);

	const el = document.querySelector('.down');
	const rect = el.getBoundingClientRect();

	window.scrollTo({
		left: window.pageXOffset + rect.left,
		top: window.pageYOffset + rect.top,
		behavior: 'smooth'

	})
}