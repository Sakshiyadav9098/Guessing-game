const max = prompt("Enter the maximum number");
const random = Math.floor(Math.random()*max)+1;
let guess = prompt("Guess the number");
while(true){
    if(guess == "quit") {
        console.log("User quit");
        break;
    }
    else if (guess == random){
        console.log("You are right. congrats! Random number was:", random);
        document.getElementById("output").innerHTML = "Congrats! Your guess is right.";

        break;
    }
    if(guess > random){
        guess = prompt("Hint -> Your guess was too large. Please try again");
    }
    else {
        guess = prompt("Hint -> Your guess was too small. Please try again");
    }
}