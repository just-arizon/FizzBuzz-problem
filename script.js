const answer = parseInt(prompt("Please enter a number you would like to FizzBuzz up to:"));

for(let i = 1; i <= answer; i++){
    if(i % 3 === 0 && i % 5 === 0 ){
       console.log("FizzBuzz");
    }else if(i % 3 === 0){
       console.log("Fizz");
    }

}