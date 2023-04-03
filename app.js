'use strict';

class ProductRepository {
	async getProduts() {
		const response = await fetch('https://dummyjson.com/products');
		console.log(await response.json());
	}
}

const repo = new ProductRepository;
repo.getProduts();

const asyncArrow = async () => {
	const response = await fetch('https://dummyjson.com/products');
	console.log(await response.json());
}

asyncArrow();