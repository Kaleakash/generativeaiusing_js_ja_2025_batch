var fs = require('fs');
var data ="Welcome to node JS";

// asynchronous file operation 
// fs.writeFile('input1.txt', data, function(err, result){
//     if(err) console.log(err);
//     console.log("Successfully written data to file");
// });

// console.log("Program Ended");


// synchronous file operation
fs.writeFileSync('input2.txt', data);
console.log("Successfully written data to file");