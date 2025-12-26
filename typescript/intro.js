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
var greetings = "Aryan";
greetings = greetings.toUpperCase();
console.log(greetings); // Output: ARYAN
// Number type
var user1 = 12;
console.log(user1.toPrecision(2)); // Output: 12
// Boolean type
var isLoggedIn = true;
console.log(isLoggedIn);
// -------------------------------
// 2. Type Inference
// -------------------------------
var city = "Delhi"; // TypeScript infers this as string
// city = 123; // ❌ Error: Type 'number' is not assignable to type 'string'
// -------------------------------
// 3. Arrays and Tuples
// -------------------------------
var marks = [80, 90, 85];
var user = ["Aryan", 21];
console.log(marks, user);
// -------------------------------
// 4. Functions with Types
// -------------------------------
function add(a, b) {
    return a + b;
}
console.log(add(5, 10));
var person = {
    name: "Aryan",
    age: 21
};
console.log(person);
var userId = 101;
userId = "A101";
console.log(userId);
// -------------------------------
// 7. Classes
// -------------------------------
var Student = /** @class */ (function () {
    function Student(name, rollNo) {
        this.name = name;
        this.rollNo = rollNo;
    }
    Student.prototype.getDetails = function () {
        return "Name: ".concat(this.name, ", Roll No: ").concat(this.rollNo);
    };
    return Student;
}());
var student1 = new Student("Aryan", 12);
console.log(student1.getDetails());
// -------------------------------
// Key Concept Summary:
// 1. Static typing prevents runtime errors.
// 2. Type inference reduces boilerplate.
// 3. Interfaces and type aliases help maintain large codebases.
// 4. Classes make object-oriented programming possible.
// 5. Compile TS -> JS using: npx tsc intro.ts
