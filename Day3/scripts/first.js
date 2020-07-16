let val = +prompt("Enter a number:",0);

let oddOrEven = function(number){
if(number % 2 === 0){
    return "Even";
}else{
    return "Odd";
}
}

let result = oddOrEven(val);

console.log(`The number entered is ${val} and it is ${result}`);