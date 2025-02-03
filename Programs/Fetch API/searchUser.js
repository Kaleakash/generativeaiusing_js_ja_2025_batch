async function searchUser(){
// Get the value of the input field with id="searchUser"
let id = document.getElementById('searchUser').value; 
// ES5 style of writing fetch
// fetch("https://jsonplaceholder.typicode.com/todos/"+id).then(response=>response.json()).
// then(data=>{
// //console.log(data.id);
//     if(data.id==undefined){
//         document.getElementById('result').innerHTML="No user found";
//     }else {
//         document.getElementById('result').innerHTML="User found with id "+data.id+" and title "+data.title
//     }
// }).catch(error=>console.log("Error "+error));

// ES6 style of writing fetch
try{
let response = await fetch("https://jsonplaceholder.typicode.com/todos/"+id);
let data = await response.json();
//console.log(result);
if(data.id==undefined){
    document.getElementById('result').innerHTML="No user found";
    }else {
    document.getElementById('result').innerHTML="User found with id "+data.id+" and title "+data.title
    }
}catch(error){
    document.getElementById('result').innerHTML=error.message
}
}