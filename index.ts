// let --> value can be reassigned
let a: number = 5;
a = 10;

// const --> value cannot be reassigned
const pi: number = 3.14;

let b: number = 10;
let message: string = "Hello, TypeScript!";
let isActive: boolean = true;
let list: number[] = [1, 2, 3, 4, 5];

// console.log(`The sum of a and b is ${a+b}`);
// console.log(message);
// console.log(`Is active: ${isActive}`);
// console.log(`List: ${list}`);

// Union type example
let x: number | string = 100;
x = "Now I'm a string";
// console.log(`Value of x: ${x}`);

// Any type example
let y: any = 50;
y = "Now I'm a string";
y = false;
y = [1,23,4];
// console.log(`Value of y: ${y}`);

// type assertion example
let z = y as number;
z = 200;
console.log(`Value of z: ${z}`)

// inference variable -> ts can automatically define types based on first assignment

let obj = {
    name: "Aaryan",
    role: "Trainer",
    salary: 50000,
    exp: 10
}

console.log(obj);

let val: unknown = 5; // not disable type checking
val = "Now I'm a string";

if (typeof val === "string") {
    console.log(`String length is ${val.length}`);
}


let val1: any = 10; // disable type checking
val1 = "Now I'm a string";

if (typeof val1 === "string") {
    console.log(`String length is ${val1.length}`);
} else {
    console.log(`String length is ${val1.length}`); // Potential runtime error
}

