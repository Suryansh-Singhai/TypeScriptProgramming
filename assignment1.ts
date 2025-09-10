const student: string = "Suryansh";
const age: number = 22;
const enrolledFlag: boolean = true;
const courseNames: string[] = ["Javascript", "Typescript", "Java", "C++"];

function getStudentInfo(name: string, age: number, enrolledFlag: boolean ): string{
    return `Student ${name} is ${age} years old. Enrolled: ${enrolledFlag}`
}

console.log(getStudentInfo("Suryansh", 22, true));