console.log("Sales department");
let sales = +prompt("Enter the sales you made in this year?",0);
let reward;
if(sales > 20000){
    reward = sales*10/100;
}else if(sales > 10000 && sales <= 20000){
    reward = sales*7/100;
}else if(sales > 5000 && sales <= 10000){
    reward = sales*5/100;
}else if(sales > 0 && sales <= 5000){
    reward = sales*2/100;
}

let commission = sales + reward;
console.log(`The reward for employee whose sales of amount ${sales} for the year is ${reward} and the total commission is ${commission}`);
