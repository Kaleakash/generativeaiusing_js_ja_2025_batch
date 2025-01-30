// normal style function declaration
welcome1()
function welcome1() {
    alert("normal style function declaration");
}
welcome1();

// expression style function declaration
//welcome2()            // this will throw error it doesn't support hoisting
var welcome2 = function() {
    alert("expression style function declaration");
}
welcome2();
// arrow style function , function keyword replaced with => symbol
var welcome3 = () => alert("arrow style function declaration");
welcome3();
// addition of two number using expression style
var add1 = function(a,b) {
    return a+b;
}
alert("Addition of two number using expression style "+add1(10,20));
// addition of two number using arrow style. if we write only 
// one statement then we can remove {} and return keyword
var add2 = (a,b)=>a+b
alert("Addition of two number using arrow style "+add2(10,20));
