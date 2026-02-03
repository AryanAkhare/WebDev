// src/examples/intro-demo.ts
// LEARNING: Introduction to basic TypeScript features
// This file demonstrates core language concepts without external imports

console.log('=== Intro Demo Output ===\n');

// ============================================
// 1. STRING TYPE AND METHODS
// ============================================
// LEARNING: 'let' declares a variable, ': string' is the type annotation
// - TypeScript enforces that greetings is always a string
// - Trying to assign a number would cause a compile error
let greetings: string = 'Aryan';
greetings = greetings.toUpperCase();  // string method
console.log('1. Uppercase:', greetings);

// ============================================
// 2. NUMBER TYPE AND METHODS
// ============================================
// LEARNING: Number type annotation ensures this variable only holds numbers
// - toPrecision() is a number method
let precision: number = 12;
console.log('2. Precision:', precision.toPrecision(2));

// ============================================
// 3. FUNCTIONS WITH TYPE ANNOTATIONS
// ============================================
// LEARNING: Function parameters and return type
// - Parameters have types: (a: number, b: number)
// - Return type is specified: ': number'
// - TypeScript ensures both inputs are numbers and output is a number
function add(a: number, b: number): number { 
  return a + b; 
}
console.log('3. Add 5+10:', add(5, 10));

// ============================================
// 4. TYPE ALIASES
// ============================================
// LEARNING: Type alias creates a custom type name
// - ID can be either a number OR a string (union type)
// - Using '|' means "or" - either type is valid
// - Very useful when a value can be multiple types
type ID = number | string;

let userId: ID = 101;  // starts as number
console.log('4a. userId (number):', userId);

userId = 'A101';  // can reassign to string - both valid for ID type
console.log('4b. userId (string):', userId);

// ============================================
// 5. OBJECT TYPES (INLINE)
// ============================================
// LEARNING: Inline object type annotation
// - This defines shape without an interface (for simple cases)
// - Each property has its type
const person: { name: string; age: number } = {
  name: 'Aryan',
  age: 21,
};
console.log('5. Person:', person.name, 'is', person.age, 'years old');

// ============================================
// 6. ARRAYS WITH TYPE ANNOTATIONS
// ============================================
// LEARNING: Array types specify what elements can be stored
// - 'number[]' means "array of numbers"
// - Alternative syntax: 'Array<number>'
const marks: number[] = [80, 90, 85];
console.log('6. Marks:', marks);

// ============================================
// WHAT YOU LEARNED TODAY
// ============================================
// - Type annotations (: string, : number, etc.)
// - Type aliases (type ID = ...)
// - Functions with typed parameters and return types
// - Arrays with typed elements
// - Objects with typed properties
// - Union types (A | B means either A or B)
// - Optional properties (property?)
// - Interfaces (define shapes of objects)
// - Enums (fixed set of named values)
// 
// WHY THIS MATTERS:
// - Catch errors at COMPILE TIME, not at runtime
// - Code is self-documenting: types tell you what to pass
// - Refactoring is safe: change a type, see all affected code
// - IDE autocomplete works better with types
