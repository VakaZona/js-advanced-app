'use strict';

const flights = ['Russia', 'USA', 'London', 'USA', 'London', 1];
console.log(flights);

const setFlights = new Set(flights);
console.log(setFlights);
console.log(setFlights.size);
console.log(setFlights.has('Russia'));
console.log(setFlights.has('Russias'));
console.log(setFlights.add('Canada'));
console.log(setFlights.delete('Canada'));
console.log(setFlights);
// console.log(setFlights.clear());


for (const flight of setFlights) {
	console.log(flight);
}

console.log([...setFlights]);

const setObj = new Set([{a: 1}, {b: 2}, {b: 3}]);
console.log(setObj);