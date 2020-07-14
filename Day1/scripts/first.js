//Log
console.log("Hello. This is to show how log works in JS");

//Error
console.error("Error: This is to differentiate normal log and error messages in console window. Mostly used in catch block");

//Warning
console.warn("Warning: This is to show show warning message if at all anything goes wrong");

//Time : This is to show the time taken to perform set of code in an application
console.time("Time Taken");
for (let index = 0; index < 40000; index++) {
    
}
console.timeEnd("Time Taken");

//This is to show an object in table format which will be comfortable to view the object
var person1 = {
    "name" : "Giridharan",
    "age" : "24"
}
var person2 = {
    "name" : "Arvind",
    "age" : "24"
}
console.table({person1, person2});