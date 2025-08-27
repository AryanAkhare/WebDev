// -----------------------------
// HOISTING
// -----------------------------
console.log("== Hoisting ==");

function printCounting() {
    console.log("counting");
}
printCounting();

// Function expression (not hoisted)
let stand = function walk() {
    console.log("walking");
};
stand();

let jump = stand; // allowed
jump();

// Anonymous function assignment
let stand2 = function () {
    console.log("walking22");
};
stand2();

// Dynamic typing
let x = 1;
x = "a";
console.log(x); // "a"


// -----------------------------
// FUNCTION BEHAVIOR
// -----------------------------
console.log("\n== Function Parameters ==");

function sum(a, b) {
    return a + b;
}

try {
    console.log(sum(1)); // NaN (b is undefined)
} catch (e) {
    console.log("Error:", e.message);
}

console.log(sum(1, -1, 2, 3)); // 0 (only first 2 params used)


// Using arguments object
function sum1(a, b) {
    let total = 0;
    for (let value of arguments) total += value;
    return total;
}
console.log(sum1()); // 0
console.log(sum1(2, 3)); // 5
console.log(sum1(2, 3, 4)); // 9
console.log(sum1(2, 3, 4, 5)); // 14


// Rest operator
function sum2(...args) {
    console.log(args);
}
sum2(1, 2, 4, 23, 2, 3, 23);


// Default parameters
function interest(p, r = 6, y = 10) {
    return (p * r * y) / 100;
}
console.log("Interest -> " + interest(1000, 10, 5)); // 500
console.log("Interest -> " + interest(1000, 5));    // 500


// -----------------------------
// GETTER AND SETTER
// -----------------------------
console.log("\n== Getter and Setter ==");

let person = {
    fname: "Aryan",
    lname: "Akhare",

    // Getter
    get fullname() {
        return `${this.fname} ${this.lname}`;
    },

    // Setter
    set fullname(name) {
        let parts = name.split(" ");
        this.fname = parts[0];
        this.lname = parts[1];
    }
};

console.log(person.fullname); // Aryan Akhare
person.fullname = "Rahul Sharma"; // using setter
console.log(person.fname);   // Rahul
console.log(person.lname);   // Sharma
console.log(person.fullname); // Rahul Sharma


// -----------------------------
// ERROR HANDLING
// -----------------------------
console.log("\n== Error Handling ==");

try {
    let num = undefined;
    let result = num.toUpperCase(); // ❌ Error
    console.log(result);
} catch (error) {
    console.log("Something went wrong:", error.message);
} finally {
    console.log("Execution finished (success or error).");
}


// -----------------------------
// CLASS WITH SETTER + ERROR HANDLING
// -----------------------------
console.log("\n== Class with Setter ==");

class Student {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        try {
            if (typeof value !== "number" || value <= 0) {
                throw new Error("Age must be a positive number");
            }
            this._age = value;
        } catch (error) {
            console.log("Setter Error:", error.message);
        }
    }
}

let s = new Student("Aryan", 20);
console.log(s.age); // 20 ✅

s.age = -5;         // ❌ error handled
console.log(s.age); // still 20

s.age = 25;         // ✅ valid
console.log(s.age); // 25


// -----------------------------
// SCOPE
// -----------------------------
console.log("\n== Scope ==");

{
    let a = 5;  // block scoped
}

try {
    console.log(a); // ReferenceError
} catch (error) {
    console.log("Error accessing 'a':", error.message);
}

// let vs var
{
    let x = 10;
    var y = 20;
}
try {
    console.log(x); // ❌ not defined
} catch (e) {
    console.log("Error accessing 'x':", e.message);
}
console.log(y); // ✅ 20

// function scope
function test() {
    let a = 1;
    var b = 2;
    console.log(a, b); // ✅ both visible here
}
test();

try {
    console.log(a); // ❌ not defined
} catch (e) {
    console.log("Error accessing 'a':", e.message);
}
try {
    console.log(b); // ❌ not defined
} catch (e) {
    console.log("Error accessing 'b':", e.message);
}

// Redeclaration
var z = 5;
var z = 10; // ✅ allowed

let w=10;
try {
    let w = 5;
     // ❌ Error
} catch (e) {
    console.log("Redeclare error with let:", e.message);
}


// -----------------------------
// HOISTING
// -----------------------------
console.log("\n== Hoisting ==");

try {
    console.log(a1); // ✅ undefined (hoisted var)
    var a1 = 5;
} catch (e) {
    console.log("Error:", e.message);
}

try {
    console.log(b1); // ❌ ReferenceError (TDZ for let)
    let b1 = 10;
} catch (e) {
    console.log("Error with let hoisting:", e.message);
}

// For loop with var vs let
for (var i = 1; i < 6; i++) {}
console.log("var i after loop:", i); // ✅ i is still accessible

for (let j = 1; j < 6; j++) {}
try {
    console.log(j); // ❌ not defined
} catch (e) {
    console.log("Error accessing 'j':", e.message);
}

// Allowed
const a=5;
function xyz(){
    const a=5
}

//Using reduce + callback
function maxCallback(acc, curr) {
    return acc > curr ? acc : curr;
}

let nums = [10, 20, 5, 40, 25];
let max = nums.reduce(maxCallback);

console.log(max); // 40
