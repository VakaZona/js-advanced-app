'use strict';

class Book {
	constructor(title, author) {
		this.title = title;
		this.author = author;
	}

	buy() {
		console.log('buy');
	}
}

class AudioBook extends Book {
	constructor(title, author, lenMin) {
		super(title, author);
		this.lenMin = lenMin;
	}

	log() {
		console.log(`${this.title} - ${this.lenMin}`)
	}
}

const book = new AudioBook('Lord of The Rings', 'Tolkien', 60 * 20);
book.buy();
book.log();