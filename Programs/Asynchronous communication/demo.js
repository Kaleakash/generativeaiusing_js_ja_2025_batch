// ES5 style promise object 
// var promise = new Promise(function(resolve, reject) {
// reject('Promise rejected...');  
// resolve('Promise resolved...');
// });

// promise.then(function(result){
// console.log("inside then "+result);
// }).catch(function(error){
//     console.log("error "+error)
// });

// console.log("Normal Statement1");
// console.log("Normal Statement2");
// console.log("Normal Statement3");

// ES6 style promise object
let promise = new Promise((resolve, reject) => {
    //resolve('Promise resolved...');
    reject('Promise rejected...');
})
promise.then((result) => console.log("inside then "+result)).
catch((error) => console.log("error "+error));

console.log("Normal Statement1");
console.log("Normal Statement2");
console.log("Normal Statement3");