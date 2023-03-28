'use strict';

const Book = function (title, author) {
	this.title = title;
	this.author = author;
};

Book.prototype.buy = function () {
	console.log('Buy');
};

const AudioBook = function (title, author, lenMin) {
	Book.call(this, title, author);
	this.lenMin = lenMin;
};

AudioBook.prototype = Object.create(Book.prototype);

AudioBook.prototype.log = function () {
	console.log(`${this.title} - ${this.lenMin}`);
};

const book = new AudioBook('Lord of The Rings', 'Tolkien', 20 * 60);
book.log();
book.buy();