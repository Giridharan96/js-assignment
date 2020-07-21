let name = prompt("Enter your name");
const dmode = document.getElementById('dark');
const welcome = document.getElementById('welcome');
welcome.innerHTML=`Welcome ${name}`;
dmode.onclick = function changeColor(){
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    document.body.style.fontFamily = 'Helvetica';
}

const ctime = document.getElementById('time');

function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = time;
}

setInterval(clock,1000);