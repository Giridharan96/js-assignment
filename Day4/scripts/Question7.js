let input = prompt("Enter a number:",2);
function prime(num){
    for(let i =1;i<num;i++ ){
        let count = 0;
        for(let j=1;j<=i;j++){
        if(i%j==0){
            count++;
        }
    }
    if(count==2){
        console.log(i);
    }
    }
}

prime(input);