// //multpromise
// let p1 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log("func 1 start");
//         resolve("promise 1 resolved");
//     }, 1000);
// });

// let output=p1.then(() => {
//     let p2 = new Promise(function(resolve, reject) {
//         resolve("promise 2 resolved");
//     });
//     return p2;
// }).then((value) => {
//     console.log(value);
//     return value; // pass it forward
// });
// output.then((value)=>{console.log(value)})
//example 2
// Example: Multiple Promises with chaining

// First Promise: Simulates an async operation (like fetching user data)
// let getUser = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Fetching user...");
//         resolve({ id: 1, name: "Aryan" }); // resolved after 1 second
//     }, 1000);
// });

// Chain: After getting user, fetch their posts (another async operation)
// let result = getUser
//     .then((user) => {
//         console.log("User fetched:", user);
//         // Return another promise (simulating fetching posts)
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 console.log("Fetching posts for user:", user.name);
//                 resolve(["Post 1", "Post 2", "Post 3"]);
//             }, 1500);
//         });
//     })
//     .then((posts) => {
//         console.log("Posts fetched:", posts);
//         // Forward the posts to the next .then()
//         return posts;
//     })
//     .then((posts) => {
//         console.log("Final processing of posts:", posts.length, "posts");
//         return posts.length; // passing number of posts forward
//     });

// // The final output promise
// result.then((postCount) => {
//     console.log("Number of posts received in final .then():", postCount);
// });

// console.log("This runs first because promises are async!");


//example 3
// First promise: simulating an async task
let promise1 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log('Promise 1 task started delay 2 secs');
    }, 2000); // 2 seconds delay
    resolve(true); // immediately resolve
});

// Chaining another promise after the first one
let output = promise1.then(() => {
    let promise2 = new Promise(function(resolve, reject) {
        setTimeout(() => {
            console.log('Promise 2 task started delay 3 secs');
        }, 3000); // 3 seconds delay
        resolve("Promise 2 resolved");
    });
    return promise2; // return the second promise to chain
});

// Handling the final resolved value
output.then((value) => console.log(value));
