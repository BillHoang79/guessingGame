var secretNumber = Math.floor((Math.random()* 100) + 1)
console.log(secretNumber)

var guess = Number(prompt("chooose a number between 1-100"))
var tries = 10
var numGuess = 0

while(guess != secretNumber){

	if(numGuess >= tries ){
		console.log("you lose")
			break
	}else if(guess < secretNumber){
		numGuess++ 
		guess = prompt("guess higher")
	}else if(guess > secretNumber){
			numGuess++
		guess = prompt("guess lower")
	}
	console.log(numGuess)
} 

if(guess == secretNumber){
	console.log("you won " + "it took " + numGuess + " tries took you to win!!")
}