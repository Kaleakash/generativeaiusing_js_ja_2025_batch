function loadData() {
    // it display header as well as body data 
    //fetch("https://jsonplaceholder.typicode.com/todos").
    //then(response=>console.log(response)).catch(error=>console.log(error));
    
    // it display only body data in the form of json 
    // fetch("https://jsonplaceholder.typicode.com/todos").
    // then(response=>response.json()).then(result=>console.log(result)).catch(error=>console.log(error));
    // console.log("Data is loading");


    fetch("https://jsonplaceholder.typicode.com/todos").
    then(response=>response.json()).
    then(result=>{
        console.log(result);    // output on console 
        
        result.forEach(todo => {
            let row = document.createElement("tr");
            let userId = document.createElement("td");
            let id = document.createElement("td");
            let title = document.createElement("td");
            let completed = document.createElement("td");

            let userIdText = document.createTextNode(todo.userId);
            let idText = document.createTextNode(todo.id);
            let titleText = document.createTextNode(todo.title);
            let completedText = document.createTextNode(todo.completed);
            
            userId.appendChild(userIdText);
            id.appendChild(idText);
            title.appendChild(titleText);
            completed.appendChild(completedText);
            
            row.appendChild(userId);
            row.appendChild(id);
            row.appendChild(title);
            row.appendChild(completed);
            
            document.getElementById("data").appendChild(row);

            
        });
        // paragraph format 
        result.forEach(element => {
    let myData = document.createElement("p");
    let myDataText = document.createTextNode(element.userId+","+element.id+","+element.title+", "+element.completed); 
    myData.appendChild(myDataText);           
        document.getElementsByTagName("body")[0].appendChild(myData);            
        });

    }).catch(error=>console.log(error));
    console.log("Data is loading");

}