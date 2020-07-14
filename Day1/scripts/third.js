//Available datatypes in JS
/*
number    : numbers of any kind: integer , float
bigint    : for big integer numbers eg. should end with n
string    : A string may have zero or more characters
boolean   : true/false.
null      : unknown values
undefined : unassigned values
object    : more complex data structures.
symbol    : unique identifiers.
*/
//number
let n = 123;console.log(n);
n = 12.333;console.log(n);
//bigInt
const bigInt = 1234567890123456789012345678901234567890n;console.log(bigInt);
//String
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;
console.log(phrase);
//boolean
let isGreater = 5 > 3;
console.log(isGreater);
//null
let name = null;
console.log(name);
//undefined
let age;
console.log(age);
//object
var car = {
    "modal": "Audi",
    "color": "Red",
    "doors": 4
}
console.log(car);
//symbol
const NAME = Symbol()
const person3 = {
  [NAME]: 'Flavio'
}

console.log(person3[NAME]);
