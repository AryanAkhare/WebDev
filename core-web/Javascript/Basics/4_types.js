// TYPES IN JS

// Primitive -> number, string, boolean, null, undefined, symbol, bigint
// Reference -> functions, objects, arrays

// Primitive values are copied by value
let a = 10;
let b = a;
a++;

console.log(a); // 11
console.log(b); // 10

// Reference values are copied by address (pointer)
let r = { value: 10 };
let q = r;
r.value++;

console.log(r.value); // 11
console.log(q.value); // 11

// Primitive in function
let numb = 49;
function incrementPrimitive(a) {
    a++;
}
incrementPrimitive(numb);
console.log(numb); // 49 (copy was incremented)

// Reference in function
let num = { value: 49 };
function incrementReference(a) {
    a.value++;
}
incrementReference(num);
console.log(num.value); // 50

// for...in loop (used for objects)
let integers = {
    one: 1,
    two: 20,
    three: 300,
    four: 4000
};

for (let key in integers) {
    console.log(key); // one, two, three, four
}

for (let key in integers) {
    console.log(integers[key]); // 1, 20, 300, 4000
}

for (let key in integers) {
    console.log(key, integers[key]); // one 1, two 20, three 300, four 4000
}

// for...of loop → used for iterable objects like arrays, strings, etc.

