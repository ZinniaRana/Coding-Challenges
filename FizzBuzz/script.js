function fizzbuzz(n){
    if((n%3 === 0 ) && (n%5 === 0)){
        console.log("FizzBuzz");
    }
    else if(n%5 === 0){
        console.log("Buzz");
    }
    if(n%3 === 0){
        console.log("Fizz");
    }
    else{
        console.log(n);
    }
}
var i =1;
while(i<=100){
    fizzbuzz(i);
    i++;
}

/*
( function fizzbuzz(){
    var i =1;
    while(i<=100){
        if(n%3 === 0){
            console.log("Fizz");
        }
        else if(n%5 === 0){
            console.log("Buzz");
        }
        else if((n%3 === 0 ) && (n%5 === 0)){
            console.log("FizzBuzz");
        }
        i++;
    }
})();

*/