function changeColor(col){ 
    document.body.style.backgroundColor = col;
}

let colors = ['red','green','yellow'];

colors.forEach(color=>{
    setTimeout(()=>{
        changeColor(color);
    },5000);
})