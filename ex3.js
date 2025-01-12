// Class LibraryItem
class LibraryItem {
    #title;
    #author;

    constructor(title, author) {
        this.#title = title;
        this.#author = author;
    }

    getInfo() {
        return `Title: ${this.#title}, Author: ${this.#author}`;
    }
}

// Subclass Book
class Book extends LibraryItem {
    #pages;

    constructor(title, author, pages) {
        super(title, author);
        this.#pages = pages;
    }

    getInfo() {
        return super.getInfo() + `, Pages: ${this.#pages}`;
    }
}
