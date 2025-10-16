// Object Cloning

// 1. Iteration
let integers1 = {
    one: 1,
    two: 20,
    three: 300,
    four: 4000
};

let numbers = {}; // Initialize as an empty object

for (let key in integers1) {
    numbers[key] = integers1[key];
}

console.log("Cloned using iteration:");
for (let key in numbers) {
    console.log(key, numbers[key]);
}

// 2. Object.assign()
let real = {
    a: "1",
    b: "2",
    c: "4"
};

let real2 = {
    value: 15,
    a: 45 // Overrides 'a' from real
};

let notReal = Object.assign({}, real, real2); // Later object values override earlier ones
console.log("notReal.a:", notReal.a); // 45
console.log("Cloned using Object.assign():", notReal);

// 3. Spread operator
let spreadClone = { ...real };
console.log("Cloned using spread syntax:", spreadClone);

// Garbage Collection
// Note: Garbage collection is automatic in JS.
// You can't manually trigger it, but objects with no references are collected automatically.


console.log(Math.random());

