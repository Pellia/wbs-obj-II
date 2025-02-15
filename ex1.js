// Book Constructor
function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;

    this.summary = function () {
        return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, Read: ${this.isRead}.`;
    };
}

// Create different Book Objects
const book1 = new Book("Tomorrow, and Tomorrow, and Tomorrow", "Gabrielle Zevin", 416, "No");
const book2 = new Book("Demon Slayer: Kimetsu no Yaiba", "Koyoharu Gotouge", 4496, "Yes");
const book3 = new Book("The Pragmatic Programmer", "Andy Hunt and Dave Thomas", 320, "Yes");
const book4 = new Book("Atomic Habits", "James Clear", 320, "Yes");
const book5 = new Book("Tubes: Behind the Scenes at the Internet", "Andrew Blum", 281, "No");

// Get Summary of all Books
console.log(book1.summary());
console.log(book2.summary());
console.log(book3.summary());
console.log(book4.summary());
console.log(book5.summary());

// Add new method using JS prototype property
Book.prototype.summary2 = function () {
    return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, Read: ${this.isRead}.`;
};

// Get Prototype Summary
console.log("\nPrototype Method:");
console.log(book1.summary2());
