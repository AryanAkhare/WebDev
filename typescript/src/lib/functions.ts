// src/lib/functions.ts
// Library module: reusable functions and types for learning
// 
// LEARNING CONCEPTS DEMONSTRATED:
// 1. Type aliases: custom names for types (Email = string)
// 2. Interfaces: defining object shapes (User interface)
// 3. Enums: fixed set of named constants (Role enum)
// 4. Exports: making code available for import elsewhere
// 5. Default parameters: role defaults to Role.USER if not provided

// Type alias: gives a semantic name to a primitive type
// LEARNING: Type aliases make code more readable. Instead of 'string' everywhere,
// we use 'Email' to clarify that this string represents an email address.
export type Email = string;

// LEARNING: Interface defines the shape/contract of an object
// - All properties except 'age' are REQUIRED (must be provided)
// - The '?' marks 'age' as OPTIONAL (can be omitted)
// - Interfaces are structural: any object matching this shape works as a User
export interface User {
  name: string;  // required string
  email: Email;  // required email (which is a string type alias)
  isPaid: boolean;  // required boolean flag
  age?: number;  // OPTIONAL: use ? to mark properties that may not exist
}

// LEARNING: Enum (enumeration) represents a fixed set of named values
// - Each member has a name and value (here: string values)
// - Prevents typos: Role.USER is safer than magic string "user"
// - Enums are used as types: function expects Role parameter
// - Values must match exactly (case-sensitive)
export enum Role {
  USER = "user",    // string literal enum value
  ADMIN = "admin",  // string literal enum value
}

// LEARNING: Function with TYPE SAFETY:
// - Parameter types: (user: User, role: Role) - enforced by TypeScript
// - Default parameter: role defaults to Role.USER if not provided
// - Return type: ': string' annotation ensures function always returns a string
// - Template literals (backticks `...`) for string interpolation with ${}
export function signUp(user: User, role: Role = Role.USER): string {
  return `${user.name} | ${user.email} | ${role}`;
}

// LEARNING: Exporting a constant with explicit type annotation
// - 'const defaultUser: User' ensures the value matches User interface
// - This can be reused in examples to avoid typing the same object repeatedly
// - Good practice: define reusable values/constants for examples
export const defaultUser: User = {
  name: "Anonymous",
  email: "anon@example.com",
  isPaid: false,
};
