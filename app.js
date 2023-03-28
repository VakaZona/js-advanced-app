'use strict';

const User = {
	init(email, password) {
		this.email = email;
		this.password = password;
	},
	log() {
		console.log('Welcome');
	}
};

const user = Object.create(User);
user.log();
user.init('a@a.com', '123');
console.log(user);