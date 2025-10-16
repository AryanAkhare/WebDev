//Oject / Reference type
//Creating

let nums=[1,3,5,7];
nums.push(9); //end
nums.unshift(8); //adds at start
nums.splice(2,0,7,8,9); //2 is index,0 is element deleted , rest are pushed into it
console.log(nums);
console.log(nums.indexOf(8));
console.log(nums.indexOf(11));

function checkExist(arr, num) {
  if (arr.includes(num)) {
    console.log("present");
  } else {
    console.log("not present");
  }
}

//Better practice
console.log(nums.includes(8));

//Start search 
console.log(nums.indexOf(4,2));// searches 4 from 2nd(ie 3rd) index


//On references
let course =[
    {no:1,naam:'Love'},
    {no:12,naam:'Babbar'},
    {no:2,naam:'Aryan'},
    {no:122,naam:'Aryan'}
]
console.log(course.indexOf({no:1,naam:'Love'})); //returns -1 even if it exists
console.log(course.includes({no:1,naam:'Love'})); //similar

let cour =course.find(function (course){
    return course.naam == 'Aryan'; //returns first occur
})
console.log(cour);

let cour1 = course.find(c => c.naam === 'Love');
console.log(cour1); // { no: 1, naam: "Love" }

let cour2 = course.find(c => c.no === 12 && c.naam === 'Babbar');
console.log(cour2); // { no: 12, naam: "Babbar" }



// ----------------------
// 1. Remove from END
// ----------------------
let numsEnd = [1, 2, 3, 4, 5, 6, 7];
numsEnd.pop(); 
console.log(numsEnd); // [1, 2, 3, 4, 5, 6]

// ----------------------
// 2. Remove from BEGINNING
// ----------------------
let numsStart = [1, 2, 3, 4, 5, 6, 7];
numsStart.shift(); 
console.log(numsStart); // [2, 3, 4, 5, 6, 7]

// ----------------------
// 3. Remove from MIDDLE (by index)
// ----------------------
let numsMid = [1, 2, 3, 4, 5, 6, 7];
numsMid.splice(2, 1); 
// removes element at index 2 → (the "3")
console.log(numsMid); // [1, 2, 4, 5, 6, 7]

// ----------------------
// 4. Remove MULTIPLE elements
// ----------------------
let numsMulti = [10, 20, 30, 40, 50];
numsMulti.splice(1, 3); 
// start=1, remove 3 → removes 20, 30, 40
console.log(numsMulti); // [10, 50]

// ----------------------
// 5. Remove by VALUE (manual)
// ----------------------
let numsManual = [1, 2, 3, 4, 5];
let index = numsManual.indexOf(3);
if (index !== -1) numsManual.splice(index, 1);
console.log(numsManual); // [1, 2, 4, 5]

// ----------------------
// 6. Remove by VALUE (filter, non-destructive)
// ----------------------
let numsFilter = [1, 2, 3, 4, 3, 5];
let without3 = numsFilter.filter(n => n !== 3);
console.log(without3); // [1, 2, 4, 5]

// ----------------------
// 7. Emptying Array
// ----------------------
let numsClear = [100, 200, 300];
numsClear.length = 0; 
console.log(numsClear); // []

// ----------------------
// 8. Remove last N elements (slice, non-destructive)
// ----------------------
let numsSlice = [1, 2, 3, 4, 5];
let trimmed = numsSlice.slice(0, -2); 
console.log(trimmed); // [1, 2, 3]


let first = [1, 2, 3];
let second = [4, 5, 6];
let third = first.concat(second);
console.log(third);  // [1, 2, 3, 4, 5, 6]

// slice → returns a new array (doesn't remove from original)
let sliced = third.slice(2, 4); // elements from index 2 to 3 (index 4 excluded)
console.log(sliced);  // [3, 4]

console.log(third);   // still [1, 2, 3, 4, 5, 6]

let students1 = [
  { id: 1, name: "Aryan" },
  { id: 2, name: "Babbar" }
];

let students2 = [
  { id: 3, name: "Love" },
  { id: 4, name: "Ankit" }
];

// ----------------------
// Combine arrays of objects
// ----------------------
let allStudents = students1.concat(students2);
console.log(allStudents);
/*
[
  { id: 1, name: "Aryan" },
  { id: 2, name: "Babbar" },
  { id: 3, name: "Love" },
  { id: 4, name: "Ankit" }
]
*/

// ----------------------
// Slice objects
// ----------------------
let slicedStudents = allStudents.slice(1, 3); // index 1 to 2 (3 excluded)
console.log(slicedStudents);
/*
[
  { id: 2, name: "Babbar" },
  { id: 3, name: "Love" }
]
*/

// ----------------------
// Proof: slice() is shallow copy (references stay same)
// ----------------------
slicedStudents[0].name = "Changed";
console.log(slicedStudents);
/*
[ { id: 2, name: "Changed" }, { id: 3, name: "Love" } ]
*/

console.log(allStudents); 
/*
[ 
  { id: 1, name: "Aryan" },
  { id: 2, name: "Changed" }, // also changed here
  { id: 3, name: "Love" },
  { id: 4, name: "Ankit" }
]
*/

//Spread operator
let f=[1,2,3];
let l=[7,8,9];
let combined=[...f,...l]
console.log(combined)
let combined1=[...f,'a',false,...l,true,'b']
console.log(combined1)

//Copy using spread
let another=[...combined];

//Wrong way to copy
// let first = [1, 2, 3];
// let second = first;second.push(4);

// console.log(first);  // [1, 2, 3, 4]
// console.log(second); // [1, 2, 3, 4]



///Iteration

let arr = [10, 20, 30, 40];

// Using for...of
for (let value of arr) {
  console.log(value);
}

// Using forEach
arr.forEach((value, index, array) => {
  console.log(value);      // element
  console.log(index);      // index of element
  console.log(array);      // whole array (optional)
});
/*
for (let i = 0; i < arr.length; i++) {
   callback(arr[i], i, arr);
}
   */
let arr1 = [10, 20, 30, 40];

// ✅ Values only
arr1.forEach(value => console.log(value));

// ✅ Index only
arr1.forEach((_, index) => console.log(index));

// ✅ Array reference only
arr1.forEach((_, __, array) => console.log(array));

//joining arrrays

let join1=[1,2,3,4,5,6,7,7,8];
const joined=join1.join('-');
console.log(joined)

//Spliting
let msg='My first message in java.'
let parts=msg.split(' ');
console.log(parts)
console.log(parts[0])

//Sorting
let values = [10, 2, 5, 20, 1];

console.log("Original:", values);

// Default sort (lexicographic, converts to strings)
let lexicographic = [...values].sort();
console.log("Default sort:", lexicographic);

// Numeric ascending
let numericAsc = [...values].sort((a, b) => a - b);
console.log("Numeric ascending:", numericAsc);
// If the function returns negative (< 0) → a comes before b.

// If it returns positive (> 0) → b comes before a.

// If it returns 0 → their order stays unchanged.

// Numeric descending
let numericDesc = [...values].sort((a, b) => b - a);
console.log("Numeric descending:", numericDesc);


// Filtering
let allnum = [1, 2, -1, 5, -7];
let filtered = allnum.filter(v => v >= 0);
console.log("Filtered (only non-negative):", filtered);

// Mapping
let mapped = allnum.map(v => v * 2);
console.log("Mapped (each element × 2):", mapped);

// Example: Extracting student marks into percentages
let students = [
  { name: "Aryan", marks: 45 },
  { name: "Neha", marks: 80 },
  { name: "Rohit", marks: 60 }
];

// Mapping: calculate percentage from marks (out of 100)
let percentages = students.map(s => `${s.name}: ${s.marks}%`);

console.log(percentages);
// Output: ["Aryan: 45%", "Neha: 80%", "Rohit: 60%"]
// Example: Converting names to uppercase
let names = ["aryan", "neha", "rohit", "sneha"];

// Mapping: transform each name → uppercase
let upperNames = names.map(name => name.toUpperCase());

console.log(upperNames); 
// Output: ["ARYAN", "NEHA", "ROHIT", "SNEHA"]

// Original array
let marks = [1, -3, 4, -2, 5, 0, 6];

// Step 1: Filter → keep only positive marks
// Step 2: Map → square each remaining mark
let result = marks
  .filter(mark => mark > 0)   // [1, 4, 5, 6]
  .map(mark => mark * mark);  // [1, 16, 25, 36]

console.log("Original:", marks);
console.log("Filtered + Squared:", result);
