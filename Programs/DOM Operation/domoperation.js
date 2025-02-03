function domOperation() {
    //alert("DOM Operation");
var name = document.getElementById("name").value;  // get value from input field
var pTag = document.createElement("p");   // create p tag element
var pTagContent = document.createTextNode("Welcome "+name);  // create text node
pTag.appendChild(pTagContent);  // append text node to p tag    <p>This is a new paragraph</p>
//document.getElementById("result").appendChild(pTag);  // append p tag to div tag 
//document.getElementsByTagName("div")[0].appendChild(pTag);  // append p tag to div tag
document.getElementsByTagName("body")[0].appendChild(pTag);  // append p tag to div tag
document.getElementById("name").value="";  // clear input field
}