let num = +prompt("Enter an input");
const list = document.querySelector('#list');
console.log(list);

for(let i = 1; i<=10; i++){
    list.innerHTML += `<li>${num} X ${i} = ${num*i}</li>`;
}