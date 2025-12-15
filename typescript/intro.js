// intro.ts
// -------------------------------
// Introduction to TypeScript
// -------------------------------
// TypeScript is a superset of JavaScript developed by Microsoft.
// It adds static typing, compile-time error checking, and better tooling.
// TypeScript code is compiled into JavaScript to run in browsers or Node.js.

// -------------------------------
// 1. Variables & Static Typing
// -------------------------------
let greetings: string = "Aryan";
greetings = greetings.toUpperCase();
console.log(greetings); // Output: ARYAN

// Number type
let user1: number = 12;
console.log(user1.toPrecision(2)); // Output: 12

// Boolean type
let isLoggedIn: boolean = true;
console.log(isLoggedIn);

// -------------------------------
// 2. Type Inference
// -------------------------------
let city = "Delhi"; // TypeScript infers this as string
// city = 123; // ❌ Error: Type 'number' is not assignable to type 'string'

// -------------------------------
// 3. Arrays and Tuples
// -------------------------------
let marks: number[] = [80, 90, 85];
let user: [string, number] = ["Aryan", 21];
console.log(marks, user);

// -------------------------------
// 4. Functions with Types
// -------------------------------
function add(a: number, b: number): number {
    return a + b;
}
console.log(add(5, 10));

// -------------------------------
// 5. Interfaces
// -------------------------------
interface User {
    name: string;
    age: number;
}

let person: User = {
    name: "Aryan",
    age: 21
};
console.log(person);

// -------------------------------
// 6. Type Aliases
// -------------------------------
type ID = number | string;
let userId: ID = 101;
userId = "A101";
console.log(userId);

// -------------------------------
// 7. Classes
// -------------------------------
class Student {
    constructor(public name: string, public rollNo: number) {}
    getDetails(): string {
        return `Name: ${this.name}, Roll No: ${this.rollNo}`;
    }
}

let student1 = new Student("Aryan", 12);
console.log(student1.getDetails());

// -------------------------------
// Key Concept Summary:
// 1. Static typing prevents runtime errors.
// 2. Type inference reduces boilerplate.
// 3. Interfaces and type aliases help maintain large codebases.
// 4. Classes make object-oriented programming possible.
// 5. Compile TS -> JS using: npx tsc intro.ts
