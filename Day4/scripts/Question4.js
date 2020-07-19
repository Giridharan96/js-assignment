console.log("Calculator Menu");
let menu = `Enter your option:
1. Add
2. Subtract
3. Multiply
4. Divide
5. Square root
6. Percentage`;
console.log(menu);
let option = +prompt("Enter your option:");
let result;
let num1;
let num2;

switch(option){
    case 1:
        num1 = +prompt("Enter Number1:");
        num2 = +prompt("Enter Number2:");
        result = num1+num2;
        break;
    case 2:
        num1 = +prompt("Enter Number1:");
        num2 = +prompt("Enter Number2:");
        result = num1-num2;
        break;
    case 3:
        num1 = +prompt("Enter Number1:");
        num2 = +prompt("Enter Number2:");
        result = num1*num2;
        break;
    case 4:
        num1 = +prompt("Enter Number1:");
        num2 = +prompt("Enter Number2:");
        result = num1/num2;
        break;
    case 5:
        num1 = +prompt("Enter Number:");
        result = Math.sqrt(num1);
        break;
    case 6:
        num1 = +prompt("Enter Number1:");
        num2 = +prompt("Enter Number2:");
        result = `${(num1 + num2) / 2}%`;
        break;
}

console.log(`The result is ${result}`);