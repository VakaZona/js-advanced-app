'use strict';

console.log(document.head);


const el = document.querySelector('.wrapper');
const el2 = document.querySelectorAll('meta');
console.log(el);
console.log(el2);
const el3 = document.getElementsByClassName('wrapper');
console.log(el3);

const button = document.createElement('button');
button.innerHTML = 'Test';

const button2 = document.createElement('button');
button.innerHTML = 'Test2'

el.append(button)
el.prepend(button2)

function generate() {
	el.remove();
}