'use strict';

async function getProducts() {
	// fetch('https://dummyjson.com/products')
	// 	.then(response => response.json())
	// .then(data => console.log(data))

	try {
		const productsResponse = await fetch('https://dummyjson.com/products');
		if (!productsResponse.ok) {
			throw new Error(productsResponse.status);
		}
		const { products } = await productsResponse.json();
		console.log(products);

		const productResponse = await fetch('https://dummyjson.com/products/' + products[0].id)
		const product = await productResponse.json();
		console.log(product);
	} catch (e) {
		console.error(e);
	} finally {
		console.log('Finnaly')
	}

}

try {
	const a = 5;
	a = 4;
} catch (e) {
	console.error(e);
}

getProducts();
console.log('end');

