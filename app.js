'use strict';

class BookClass {
	isRead = false;
	constructor(title, author) {
		this.title = title;
		this.author = author;
	}

	read() {
		this.isRead = true;
	}
}

const book = new BookClass('book 1', 'author 1');
console.log(book); 