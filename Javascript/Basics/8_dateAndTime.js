// ----------------------
// Date in JavaScript
// ----------------------

// Create current date & time
let date = new Date();
console.log(date);  
// Example: 2025-08-23T10:25:30.123Z

// Create date from string
let date2 = new Date('June 20 1993 07:15');
console.log(date2);  
// Sun Jun 20 1993 07:15:00

// Create date using (year, month, day, hour, minute, second, ms)
// NOTE: Month is 0-based → 0 = Jan, 5 = June
let date3 = new Date(1993, 5, 20, 7, 15);
console.log(date3);  
// Sun Jun 20 1993 07:15:00

// ----------------------
// Get Methods
// ----------------------
console.log(date.getFullYear());   // year → 2025
console.log(date.getMonth());      // month (0–11) → 7 (August)
console.log(date.getDate());       // day of month (1–31)
console.log(date.getDay());        // day of week (0–6, 0=Sunday)
console.log(date.getHours());      // hours (0–23)
console.log(date.getMinutes());    // minutes
console.log(date.getSeconds());    // seconds
console.log(date.getMilliseconds());// ms
console.log(date.getTime());       // timestamp (ms since Jan 1, 1970)

// ----------------------
// Set Methods
// ----------------------
let newDate = new Date();
newDate.setFullYear(2030);  
newDate.setMonth(0);       // January
newDate.setDate(15);       // 15th
newDate.setHours(10, 30);  // 10:30
console.log(newDate);

// ----------------------
// Date Formatting
// ----------------------
console.log(date.toDateString());   // "Sat Aug 23 2025"
console.log(date.toTimeString());   // "15:55:45 GMT+0530 (India Standard Time)"
console.log(date.toISOString());    // "2025-08-23T10:25:45.123Z"
console.log(date.toLocaleDateString());// locale date → "23/8/2025"
console.log(date.toLocaleTimeString());// locale time → "3:55:45 pm"
console.log(date.toLocaleString()); // date + time → "23/8/2025, 3:55:45 pm"

// ----------------------
// Date Calculations
// ----------------------
let today = new Date();
let tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);
console.log(tomorrow); // tomorrow's date

let diff = tomorrow - today; // difference in ms
console.log(diff / (1000 * 60 * 60 * 24)); // difference in days (→ 1)

// ----------------------
// Example Use Case
// ----------------------
let birthDate = new Date("2000-08-23");
let age = new Date().getFullYear() - birthDate.getFullYear();
console.log(`Age: ${age}`);  // Age calculation
