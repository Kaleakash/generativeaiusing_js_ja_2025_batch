var num=[1,2,3,4,5,6,7,8,9,10];
document.writeln(num);
document.writeln("<br>");
// retrieve element from array using for loop 
document.writeln("using for loop<br>");
for(var i=0;i<num.length;i=i+2){
    document.writeln(num[i]);
    document.writeln("<br>");
}
document.writeln("<br>");
// retrieve element from array using for of loop
document.writeln("using for of loop<br>");
for(var n of num){
    document.writeln(n);
    document.writeln("<br>");
}
document.writeln("<br>");
// retrieve element from array using for in loop
document.writeln("using for in loop<br>");
for(var index in num){
    document.writeln("Value "+num[index]+" Index "+index);
    document.writeln("<br>");
}
//retrieve element from array using forEach function using expression style 
document.writeln("using forEach function<br>");
num.forEach(function(n){
    document.writeln(n);
    document.writeln("<br>");
})
// retrieve element from array using forEach function using arrow function
document.writeln("using forEach function with arrow function<br>");
num.forEach(n=>document.writeln(n+"<br>"));
document.writeln("using forEach function with arrow function with index and value<br>");
num.forEach((n,index)=>document.writeln("Value "+n+" Index "+index+"<br>"));
