var fs = require('fs');

// read operation asynchronously manner 
// fs.readFile('input1.txt', function(err, data){   
//     if(err) console.log(err.message);
//     console.log(data.toString());
// });
// console.log("Program Ended");

// read operation synchronously manner
let data = fs.readFileSync('input2.txt');
console.log(data.toString());
console.log("Program Ended");