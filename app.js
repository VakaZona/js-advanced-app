'use strict';

class Book {
	constructor(title, author) {
		this.title = title;
		this.author = author;
	}

	info() {
		console.log(this.title);
		console.log(this.author);
	}
}

class EBook extends Book {
	constructor(title, author, pages) {
		super(title, author);
		this.pages = pages;
	}

	info() {
		console.log(this.title);
		console.log(this.author);
		console.log(this.pages);
	}
}

const book = new Book('Lord of the Rings', 'Tolkien');
book.info();

const book2 = new EBook('Lord of the Rings', 'Tolkien', 150);
book2.info();