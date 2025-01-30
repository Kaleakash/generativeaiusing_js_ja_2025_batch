var num1=[];    // empty array  literal style 
var num2=[1,2,3,4,5];    // array with elements
var num3 = new Array();    // empty array creating using constructor style
var num4 = new Array(1,2,3,4,5);    // array with elements created using constructor style
document.writeln(num1);    // output:
document.writeln("<br/>");    // output: 1,2,3,4,5
document.writeln(num2);    // output: 1,2,3,4,5
document.writeln("<br/>");
document.writeln(num3);    // output:
document.writeln("<br/>");
document.writeln(num4);    // output: 1,2,3,4,5
document.writeln("<br/>");
document.writeln(num2.join("->"));    // output: 1
document.writeln("<br/>");
document.writeln(num2[0]);    // output: 1
document.writeln("<br/>");
document.writeln(num2[1]);    // output: 2
num2.push(6)    // add element at the end of the array
num2.push(7)    // add element at the end of the array
num2.unshift(0)    // add element at the beginning of the array
num2.unshift(-1)    // add element at the beginning of the array
document.writeln("<br/>"); 
document.writeln(num2);    // output: -1,0,1,2,3,4,5,6,7
num2.pop()    // remove element from the end of the array
num2.shift()    // remove element from the beginning of the array
document.writeln("<br/>");    
document.writeln(num2);    // output: 0,1,2,3,4,5,6
