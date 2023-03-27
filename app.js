'use strict';

const user1 = {
	name: 'Vasia',
	birthday: '3/27/2023'
}
const user2 = {
	name: 'Vasia',
	birthday: '12/4/2023'
}

function isBirthday(user) {
	const birthdayDate = new Date(user.birthday);
	const now = new Date();
	if (birthdayDate.getMonth() !== now.getMonth()) {
		return false;
	}
	if (birthdayDate.getDate() !== now.getDate()) {
		return false;
	}
	return true;
}

console.log(isBirthday(user1));
console.log(isBirthday(user2));