// // synchronous code
// function sync(){
//     console.log("first")
// }
// sync();
// console.log("second")


// // Async code
// setTimeout(function(){
//     console.log("third")
// },3000)
// function sync(){
//     console.log("first")
// }
// sync();
// console.log("second")



// JS IS SINGLE THREAD , SO WE MAINTIAN CONCURRENCY USING ASYNC

//Promises JS -->resolve and reject

// let myPromise=new Promise(function(resolve,reject){
//     setTimeout(function(){
//     console.log("I am inside a promise");
//     },5000)
//     resolve(1998);
    
// })
// console.log("pehla")

// let myPromise1=new Promise(function(resolve,reject){
//     setTimeout(function(){
//     console.log("I am inside a reject promise");
//     },5000)
   
//     reject(new Error("Error , reject"))
// })
// console.log("pehla")


//Paralel exect
// let promise1=new Promise(function(resolve,reject){
//     setTimeout(function(){
//     console.log("I am inside a promise 1");
//     },5000)
    
    
// })


// let promise2=new Promise(function(resolve,reject){
//     setTimeout(function(){
//     console.log("I am inside a  promise 2");
//     },3000)
   
   
// })
// console.log("pehla")


//Parallel -> fulfilled and rejected
//then  for fullfilled and catch for rejected


//Using then fullfill
// let promiseThen = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log("I am inside a promise 1");
//         resolve(1234); // resolve inside setTimeout
//     }, 2000); // added delay for demo
// });

// promiseThen.then((value) => {
//     console.log("Resolved with:", value);
// });

// console.log("first msg");


//using catch for reject
// let promiseCatch = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log("I am inside a promise 1");
//         reject(1234); // resolve inside setTimeout
//     }, 2000); // added delay for demo

// });

// promiseCatch.catch((value) => {
//     console.log("Rejected with:", value);
// });

// console.log("first msg");

//then can do both fullfil and reject , show it with exmaple


//MultiPromise


