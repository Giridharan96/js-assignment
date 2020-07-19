const student = {
    name:"Helsinki",
    age:24,
    projects:{
        diceGame: "Two player dice game using Javascript"
    }
}
const {name,age,projects:{diceGame}} = student;

console.log(`Name is ${name} and age is ${age}. Project : ${diceGame}`);