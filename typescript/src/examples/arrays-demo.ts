// src/examples/arrays-demo.ts
// LEARNING: Arrays and their types in TypeScript
// Arrays are ordered collections of values. TypeScript enforces that all
// elements in an array match the declared type.

console.log('=== Arrays Demo Output ===\n');

// ============================================
// 1. BASIC ARRAY TYPES
// ============================================
// LEARNING: 'number[]' means "array of numbers"
// - TypeScript ensures ALL elements are numbers
// - Trying to push a string would cause a compile error
const numbers: number[] = [10, 20, 30, 40];
console.log('1. Numbers array:', numbers);
console.log('   First element:', numbers[0]);
console.log('   Length:', numbers.length);

// LEARNING: Alternative syntax - 'Array<T>' is equivalent to 'T[]'
// Both mean the same thing. Use whichever you prefer.
const names: Array<string> = ['Alice', 'Bob', 'Charlie'];
console.log('\n2. Names array:', names);
names.push('Diana');  // push adds element to end
console.log('   After push:', names);

// ============================================
// 2. ARRAYS OF OBJECTS
// ============================================
// LEARNING: Array of objects with type
// - 'User[]' means "array of User objects"
// - Each object must match the User interface structure
interface User {
  name: string;
  age: number;
  email: string;
}

const users: User[] = [
  { name: 'Aryan', age: 21, email: 'aryan@example.com' },
  { name: 'Paras', age: 22, email: 'paras@example.com' },
  { name: 'Aditya', age: 20, email: 'aditya@example.com' },
];

console.log('\n3. Users array:');
users.forEach((user, index) => {
  console.log(`   ${index + 1}. ${user.name} (${user.age}) - ${user.email}`);
});

// ============================================
// 3. TUPLE TYPES
// ============================================
// LEARNING: Tuples are fixed-length arrays with specific types for each position
// - [string, number] means: first element is string, second is number
// - Length is FIXED (always 2 elements in this case)
// - Types at each position are different and enforced
const response: [string, number] = ['Success', 200];
console.log('\n4. Tuple response:', response);
console.log('   Status:', response[0]);
console.log('   Code:', response[1]);

// LEARNING: Tuple with more elements
// - [string, number, boolean] has exactly 3 elements
// - Position 0: string, Position 1: number, Position 2: boolean
const record: [string, number, boolean] = ['John', 25, true];
console.log('\n5. Tuple record:', record);

// ============================================
// 4. READONLY ARRAYS
// ============================================
// LEARNING: 'readonly' prevents modification after creation
// - Cannot push, pop, or reassign elements
// - Good for data that should not change
const immutableNumbers: readonly number[] = [1, 2, 3];
console.log('\n6. Immutable array:', immutableNumbers);
// immutableNumbers.push(4);  // ERROR: would not compile
// immutableNumbers[0] = 99;  // ERROR: would not compile

// ============================================
// 5. UNION ARRAYS
// ============================================
// LEARNING: Arrays can hold multiple types with union
// - 'mixed' can contain strings OR numbers (or both)
// - Use unions when data genuinely has multiple types
const mixed: (string | number)[] = ['hello', 42, 'world', 99];
console.log('\n7. Mixed array (string | number):', mixed);

// ============================================
// 6. ARRAY METHODS WITH TYPES
// ============================================
// LEARNING: Array methods work with typed arrays
const scores: number[] = [85, 92, 78, 95, 88];
console.log('\n8. Array methods:');
console.log('   Original:', scores);
console.log('   Sum:', scores.reduce((sum, score) => sum + score, 0));
console.log('   Average:', scores.reduce((sum, score) => sum + score, 0) / scores.length);
console.log('   Max:', Math.max(...scores));
console.log('   Filtered (>80):', scores.filter(s => s > 80));
console.log('   Mapped (*2):', scores.map(s => s * 2));

// ============================================
// 7. ARRAY TYPE INFERENCE
// ============================================
// LEARNING: TypeScript can infer array types automatically
// - No need for explicit type annotation if it's obvious
// - inferred to 'string[]' from the literal array
const colors = ['red', 'green', 'blue'];
console.log('\n9. Inferred array type (string[]):', colors);

// LEARNING: Mixed literals create union type
// - TypeScript infers 'mixed2' as '(string | number)[]'
const mixed2 = [1, 'two', 3, 'four'];
console.log('   Inferred union type:', mixed2);

// ============================================
// 8. OPTIONAL ARRAY ELEMENTS
// ============================================
// LEARNING: Element can be undefined with '?'
// - 'optional' can have undefined values at any position
const optional: (string | undefined)[] = ['a', undefined, 'c'];
console.log('\n10. Optional elements array:', optional);

// ============================================
// WHAT YOU LEARNED ABOUT ARRAYS
// ============================================
// - number[] / Array<number>: typed arrays enforce element types
// - User[] or any[]Object[]: arrays of objects
// - [T, U]: tuples have fixed length and specific types per position
// - readonly: prevents modification
// - (A | B)[]: arrays with union types (multiple valid types)
// - Array methods (map, filter, reduce) work with types
// - Type inference: TypeScript guesses array types automatically
// - undefined handling: make elements optional with (T | undefined)[]
