/*
var keyword

This is to declare a variable globally.
Var is function-scoped, that is a variable declared inside a function is treated as a separate variable 
but when it comes to blocks like if-block,
it doesn't happen as we want it to.
This was the reason most programmers got confused and that led to let.
*/
var a = 10;
{
    var a = 1;
    console.log(a);

}
console.log(a);//It is supposed to be 10. Due to this let keyword came into action.

/*
let keyword
Let is similar to var but the scoping is different. 
Let is block-scoped like most mainstream programming languages.
 Here, a variable declared inside a block does not affect the global scope.
*/
let b = 10;
{
    let b = 2;
    console.log(b);
}
console.log(b);//Now this wont get conflict with global variable and local variable
/* 
const keyword

This is to declare a variable which we cannot reassign.
const is used widely now a days
We can mutate the value but we cannot reassign it completely

*/
const person = {
    name : "Giridharan",
    age : 24,
    designation : "Java Developer"
}
console.table(person);
//allowed
person.designation = "Javascript Developer";
console.table(person);
/*
//not allowed
person = {
    name : "Arvind",
    age : 24
}
*/