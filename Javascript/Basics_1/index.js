// RUN in VS Code: node filename.js

// Output something to console
console.log("Hello, boys!");

// -------------------------
// VARIABLES
// -------------------------

// let is block-scoped (preferred)
let a = 6;
let name = 'Babbar';
let status = true;

// Concatenation
console.log(a + name); // 6Babbar

// Variable reassign
name = 'Aryan';
console.log(name);

// Multiple variable declaration
let a1 = 2, b1 = 3;
console.log(a1 + b1); // 5

// Rules:
// - Can't use reserved keywords (let, var, etc.)
// - Must be meaningful
// - Can't start with a number

// -------------------------
// DATA TYPES
// -------------------------

// 1. Primitive Types (copied by value)
let myStr = 'Love Babbar'; // string
let myNum = -12;           // number
let isCool = true;         // boolean
let noValue;               // undefined
let empty = null;          // null

// 2. Reference Types (copied by reference)
// Object
let person = {
  firstName: 'Aryan',
  age: 24
};
console.log(person.age); // 24

// Array (can store mixed types)
let students = ['Love', 'Rahul', 'Aryan', 15];
console.log(students[2]); // Aryan
console.log(students[3]); // 15

// Function
function greet(name) {
  return "Hello " + name;
}
console.log(greet("Aryan"));

// -------------------------
// OPERATORS
// -------------------------

// Arithmetic
let num = 6;
let num2 = 6;
console.log(++num2); // pre-increment: 7
console.log(num++);  // post-increment: 6

// Comparison
let num3 = '1';
let num4 = 1;
console.log(num3 === num4); // false (strict: value + type)
console.log(num3 == num4);  // true  (loose: only value)

// Ternary
let age = 15;
let canVote = (age >= 18) ? "Can vote" : "Cannot vote";
console.log(canVote); // Cannot vote

// Nullish Coalescing (??)
let city;
let finalCity = city ?? "Default City"; // checks for null/undefined only
console.log(finalCity); // Default City

// Logical Operators
let bit1 = true;
let bit2 = false;
let bit3 = 3; // truthy
let bit4 = 4;

// AND (&&) – returns first falsy or last truthy
console.log(bit1 && bit2); // false

// OR (||) – returns first truthy
console.log(bit1 && bit2 || bit3); // true && false || 3 → false || 3 → 3

// Bitwise XOR (^)
console.log(bit3 ^ bit4); // 3^4 = 7 (011 ^ 100 = 111)

// -------------------------
// CONDITIONAL STATEMENTS
// -------------------------

let abb = 16;

if (abb > 15) {
  console.log("Greater");
} else if (abb === 15) {
  console.log("Equal");
} else {
  console.log("Less");
}

// -------------------------
// LOOPS
// -------------------------

// For Loop
for (let i = 0; i < 5; i++) {
  console.log(i + " Love Bar");
}

// While Loop
let i = 0;
while (i < 6) {
  console.log(i);
  i++;
}

// Do-While Loop
let j = 0;
do {
  console.log("This runs at least once");
  j++;
} while (j < 1);

// -------------------------
// FUNCTIONS
// -------------------------

// Function Declaration
function add(x, y) {
  return x + y;
}
console.log(add(5, 7)); // 12

// Function Expression
const multiply = function(x, y) {
  return x * y;
};
console.log(multiply(3, 4)); // 12

// Arrow Function (ES6+)
const square = x => x * x;
console.log(square(5)); // 25

// -------------------------
// OTHER BASICS
// -------------------------

// typeof operator
console.log(typeof name); // string
console.log(typeof empty); // object (special case)

// Template Literals
let user = "Aryan";
let greeting = `Hello, ${user}!`;
console.log(greeting);

// Arrays: useful methods
let arr = [1, 2, 3, 4];
arr.push(5); // add
arr.pop();   // remove last
console.log(arr.includes(3)); // true

// Object with methods
let calculator = {
  sum(a, b) {
    return a + b;
  },
  sub: function(a, b) {
    return a - b;
  }
};
console.log(calculator.sum(2, 3)); // 5

