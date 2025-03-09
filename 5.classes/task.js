class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null;
    }

    fix() {
    this._state *= 1.5;
    this._state = Math.min(this._state, 100);
    }

    set state(newState) {
    if (newState < 0) {
    this._state = 0;
    } else if (newState > 100) {
    this._state = 100;
    } else {
    this._state = newState;
    }
    }

    get state() {
    return this._state;
    }
   }

   class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
    }
   }

   class Book extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, author) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
    }
   }

   class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
    super(name, releaseDate, pagesCount, author);
    this.type = "novelBook";
    }
   }
   
   class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
    super(name, releaseDate, pagesCount, author);
    this.type = "fantasticBook";
    }
   }
   
   class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
    super(name, releaseDate, pagesCount, author);
    this.type = "detectiveBook";
    }
   }

class Library {
    constructor(name) {
    this.name = name;
    this.books = [];
    }

    addBook(book) {
    if (book.state > 30) {
    this.books.push(book);
    return true;
    }
    return false;
    }

    findBookBy(type, value) {
    const foundBook = this.books.find(book => {
    return book[type] === value;
    });
    return foundBook || null;
    }

    giveBookByName(bookName) {
    const index = this.books.findIndex(book => book.name === bookName);
    if (index !== -1) {
    const foundBook = this.books[index];
    this.books.splice(index, 1);
    return foundBook;
    }
    return null;
    }
   }

   const library = new Library("Центральная библиотека");

const magazine = new Magazine("Наука и жизнь", 2023, 120);
const novel = new NovelBook("Война и мир", 1869, 1225, "Л.Н. Толстой");
const detective = new DetectiveBook("Убийство в Восточном экспрессе", 1934, 320, "Агата Кристи");
const fantastic = new FantasticBook("451 градус по Фаренгейту", 1953, 272, "Рэй Брэдбери");

library.addBook(magazine);
library.addBook(NovelBook);
library.addBook(DetectiveBook);
library.addBook(FantasticBook);

const book1919 = library.findBookBy("releaseDate", 1919);
if (!book1919) {
    const newBook = new Book("Название книги", 1919, 250, "Неизвестный автор");
    library.addBook(newBook);
}

const issuedBook = library.giveBookByName("Война и мир");

issuedBook.state = 20;
