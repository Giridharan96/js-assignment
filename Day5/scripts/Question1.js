console.log("Question 1");
let input = +prompt("Enter a number");
let arr = [];
for(let i = 1; i < input; i++){
    arr.push(i);
}

//Filter

let odd = arr.filter(el=>el%2!=0);

let oddCube = odd.map(el=>el**3);

console.log(oddCube);
