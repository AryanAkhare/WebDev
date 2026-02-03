// src/examples/functions-demo.ts
// LEARNING: This file demonstrates how to IMPORT and USE library code
//
// CONCEPTS:
// 1. Relative imports: '../lib/functions' imports from sibling folder
// 2. Named imports: { signUp, Role, User } imports specific exports
// 3. Using types: User is a type, used for type annotations
// 4. Using enums: Role.ADMIN uses the enum to get a safe constant value

import { signUp, Role, User } from '../lib/functions';

// LEARNING: Creating User objects with explicit type annotations
// - TypeScript checks that these objects match the User interface
// - Missing required fields = compile error (prevented at build time)
// - age is optional: u1 omits it, u2 includes it
const u1: User = { 
  name: 'Aryan', 
  email: 'aryan@gmail.com', 
  isPaid: false 
};

const u2: User = { 
  name: 'Paras', 
  email: 'age@gmail.com', 
  isPaid: true, 
  age: 22  // optional field
};

console.log('=== Functions Demo Output ===');

// LEARNING: Calling function with one argument (role uses default)
// - signUp(u1) uses default role = Role.USER
// - TypeScript ensures u1 is a User and prints the result
console.log(signUp(u1));

// LEARNING: Calling function with two arguments (explicit role)
// - signUp(u2, Role.ADMIN) explicitly sets role to ADMIN
// - Using Role.ADMIN is safer than string "admin" (no typos possible)
console.log(signUp(u2, Role.ADMIN));
