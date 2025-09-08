// function - functions are piece of code that can be reused
function add(a: number, b: number): number {
    return a+b;
}

let substract: (a: number, b: number) => number;
substract = (a,b) => a-b;

let multiply = (a:number, b: number): number => a*b;
let result = add(5,10);
console.log(`${result}`);
console.log(`The sum is: ${result}`);
console.log(`Substraction is ${substract(5, 4)}`);
console.log(`Multiplication is ${multiply(5, 4)}`);

// optional and default parameteres
function greet(name: string, greeting?: string): string {
    return `${greeting? greeting: "Hello"}, ${name}!`;
}
console.log(greet("Suryansh", "Good morning"));
console.log(greet("Suryansh"));

// generics
//flexible way to create reusable components
function myFunc<T>(arg: T, arg1?: T): T{
    return arg1? arg1 : arg;
}

let r = myFunc<number>(100, 101);
console.log(`Generic function result: ${r}`);

let r1 = myFunc<string>("Typescript");
console.log(`Generic function result: ${r1}`);