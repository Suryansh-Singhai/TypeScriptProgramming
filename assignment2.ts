interface Book{
    title: string;
    author: string;
    pages: number;
    isAvailable: boolean;
}

function printBookInfo(book: Book): void {
    console.log(`title: ${book.title}, author: ${book.author}, pages: ${book.pages}, isAvailable: ${book.isAvailable}`)
}

const b1: Book ={
    title: "Harry Potter", 
    author: "J K Rowling", 
    pages: 300, 
    isAvailable: true};
    
const b2: Book = {
    title: "MyBook", 
    author: "Suryansh", 
    pages: 250, 
    isAvailable: false};

printBookInfo(b1); 
printBookInfo(b2);
