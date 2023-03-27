'use strict';

const Book = function (title, author) {
	this.title = title;
	this.author = author;
	this.isRead = false;

}

Book.prototype.read = function () {
	this.isRead = true;
}

const lordOfTheRing = new Book('Lord of the Ring', 'Tolkien');
console.log(lordOfTheRing);
lordOfTheRing.read();
console.log(lordOfTheRing);
console.log(lordOfTheRing.__proto__);
console.log(lordOfTheRing.__proto__ === Book.prototype);