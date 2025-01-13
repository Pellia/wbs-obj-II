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

// Member
class Member {
    #name;
    #booksCheckedOut;

    constructor(name, booksCheckedOut = []) {
        this.#name = name;
        this.#booksCheckedOut = booksCheckedOut;
    }

    checkOutBook(book) {
        this.#booksCheckedOut.push(book);
    }

    returnBook(book) {
        const index = this.#booksCheckedOut.indexOf(book);
        if (index > -1) {
            this.#booksCheckedOut.splice(index, 1);
        }
    }

    listBooks() {
        if (this.#booksCheckedOut.length === 0) {
            console.log("No Books checked out");
        } else {
            console.log(`Listing checked out Books from ${this.getName()} ...`);
            for (let i = 0; i < this.#booksCheckedOut.length; i++) {
                console.log(this.#booksCheckedOut[i].getInfo());
            }
        }
    }

    getName() {
        return this.#name;
    }
}

// Create different Book Objects
const book1 = new Book("Tomorrow, and Tomorrow, and Tomorrow", "Gabrielle Zevin", 416, "No");
const book2 = new Book("Demon Slayer: Kimetsu no Yaiba", "Koyoharu Gotouge", 4496, "Yes");
const book3 = new Book("The Pragmatic Programmer", "Andy Hunt and Dave Thomas", 320, "Yes");
const book4 = new Book("Atomic Habits", "James Clear", 320, "Yes");
const book5 = new Book("Tubes: Behind the Scenes at the Internet", "Andrew Blum", 281, "No");

// Create Members and check out Books
const m1 = new Member("Max");
const m2 = new Member("Daniel");
m1.checkOutBook(book1);
m1.checkOutBook(book2);
m1.listBooks();
m1.returnBook(book2);
m1.listBooks();
m2.listBooks();
