'use strict';

fetch('https://dummyjson.com/products/' + 1).then((response) => {
	console.log(response);
	return response.json();	
}).then((data) => {
	console.log(data);
});

//easy
fetch('https://dummyjson.com/products/' + 1)
	.then((response) => response.json())
	.then((data) => 
	console.log(data));