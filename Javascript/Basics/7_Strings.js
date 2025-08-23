// ----------------------
// String in JavaScript
// ----------------------

// Two ways to create strings:
let firstName = "Aryan";                  // String literal (primitive, immutable)
let lastName = new String("Akhare");      // String object (rarely used, avoid)

// Concatenation
let fullName = firstName + " " + lastName;

// ----------------------
// Type checking
// ----------------------
console.log(typeof firstName); // "string" (primitive)
console.log(typeof lastName);  // "object" (String object)

// ----------------------
// Properties
// ----------------------
console.log(firstName.length);  // length of string → 5
console.log(firstName[0]);      // indexing (0-based) → "A"

// ----------------------
// Search Methods
// ----------------------
console.log(firstName.includes("ar"));   // false (case-sensitive)
console.log(firstName.startsWith("Ar")); // true
console.log(firstName.endsWith("an"));   // true
console.log(firstName.indexOf("y"));     // index → 1
console.log(firstName.lastIndexOf("a")); // last occurrence → 4

// ----------------------
// Case Conversion
// ----------------------
console.log(firstName.toLowerCase());     // "aryan"
console.log(firstName.toUpperCase());     // "ARYAN"
console.log(firstName.toLocaleLowerCase());// locale-aware lowercase
console.log(firstName.toLocaleUpperCase());// locale-aware uppercase

// ----------------------
// Whitespace Handling
// ----------------------
let spaced = "   Hello Aryan   ";
console.log(spaced.trim());      // "Hello Aryan" (removes both ends)
console.log(spaced.trimStart()); // "Hello Aryan   " (removes only start)
console.log(spaced.trimEnd());   // "   Hello Aryan" (removes only end)

// ----------------------
// String Extraction
// ----------------------
console.log(firstName.slice(1, 4));   // "rya" (from index 1 to 3)
console.log(firstName.substring(1, 4)); // "rya" (similar to slice but no negatives)
console.log(firstName.substr(1, 3));    // "rya" (deprecated, use slice instead)

// ----------------------
// Replace / Modify
// ----------------------
let sentence = "I love Java. Java is fun.";
console.log(sentence.replace("Java", "JS"));       // "I love JS. Java is fun."
console.log(sentence.replaceAll("Java", "JS"));    // "I love JS. JS is fun."
console.log(firstName.concat(" ", "Akhare"));      // "Aryan Akhare"
console.log(firstName.repeat(3));                  // "AryanAryanAryan"

// ----------------------
// Split & Join
// ----------------------
let csv = "apple,banana,mango";
let fruits = csv.split(","); 
console.log(fruits);             // ["apple","banana","mango"]
console.log(fruits.join(" - ")); // "apple - banana - mango"

// ----------------------
// Character Access
// ----------------------
console.log(firstName.charAt(2));     // "y"
console.log(firstName.charCodeAt(0)); // Unicode code of "A" → 65

// ----------------------
// Template Literals
// ----------------------
let age = 21;
console.log(`My name is ${firstName} ${lastName} and I am ${age} years old.`);

// ----------------------
// Final Output
// ----------------------
console.log(fullName);          // "Aryan Akhare"
