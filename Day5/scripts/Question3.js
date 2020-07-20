fetch('https://jsonplaceholder.typicode.com/todos')
.then(response=>response.json())
.then(data=>console.log(data));


let obj = {
    "userId": 1,
    "title": "quo adiquam ut ab",
    "completed": true
  }

// Make a post Request
fetch('https://jsonplaceholder.typicode.com/todos',{
    method:'POST',
    body: JSON.stringify(obj)
}).then(response=>response.json())
.then(data=>console.log(data));

//Get completed response
fetch('https://jsonplaceholder.typicode.com/todos?completed=true')
.then(response=>response.json())
.then(data=>console.log(data));

async function fetchAll(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();

    console.log(data);
}

fetchAll();