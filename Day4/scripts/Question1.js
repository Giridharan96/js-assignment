const iteration = 100;
for (let index = 1; index < iteration; index++) {
    if(index%3==0 && index%5==0){
        console.log("fizzbuzz");
    }else if(index%3==0){
        console.log("fizz");
    }else if(index%5==0){
        console.log("buzz");
    }
}