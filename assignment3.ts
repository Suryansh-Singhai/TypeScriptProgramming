class Person{
    name: string;
    age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
    introduce(): void{
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`)
    }
}

class Student extends Person{
    studentId: number;
    constructor(name: string, age: number, studentId: number){
        super(name, age);
        this.studentId = studentId;
    }
    study(): void{
        console.log(`Student ${this.name} is studying.`)
    }
}

const S1: Student = new Student("Suryansh", 22, 63);
S1.introduce();
S1.study();