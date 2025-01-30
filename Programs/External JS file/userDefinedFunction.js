// simple function to display message 
function displayMessage() {
    alert("Hello World!");
}
displayMessage(); // calling the function
displayMessage();// calling the function
// Output: Hello World!

// another simple passing parameter 
function displayMessageWithParameter(message) {
    alert(message);
}
displayMessageWithParameter("Hello World!"); // calling the function with parameter
displayMessageWithParameter("Hello JavaScript!"); // calling the function with parameter

displayMessageWithParameter("Hello Function!"); // calling the function with parameter
// function with passing multiple parameters and return result
function addNumbers(num1, num2) {
    return num1 + num2;
}
var result = addNumbers(10, 20); // calling the function with parameter
alert(result); // Output: 30
var result1= addNumbers("a", "b"); // calling the function with parameter
alert(result1); // Output: ab
var result3 = addNumbers(100);
alert(result3); // Output: NaN