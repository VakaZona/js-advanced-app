'use strict';

class Car {
	#vin = 6;

	#changeVin() {
		console.log('Change VIN');
	}

	test() {
		this.#changeVin();
	}
}

const car = new Car();
car.test();