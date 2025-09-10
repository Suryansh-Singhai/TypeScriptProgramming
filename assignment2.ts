interface Book{
    title: string;
    author: string;
    pages: number;
    isAvailable: boolean;
}

class PrintBook implements Book{
    title: string;
    author: string;
    pages: number;
    isAvailable: boolean;
    constructor(title: string, author: string, pages: number, isAvailable: boolean){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isAvailable = isAvailable;
    }
}

function printBookInfo(book: Book): void {
    console.log(`title: ${book.title}, author: ${book.author}, pages: ${book.pages}, isAvailable: ${book.isAvailable}`)
}

const b1: Book = new PrintBook("Harry Potter", "J K Rowling", 300, true);
const b2: Book = new PrintBook("MyBook", "Suryansh", 250, false);

printBookInfo(b1); 
printBookInfo(b2);
