// Create a function that returns either Rock, Paper or Scissors
function computerPlay(){
    let x;
    let handSign;
    x = Math.floor((Math.random() * 3) +1);
    console.log(x);
// Can be replaced with switch
    if (x===1){
        handSign = "Rock";
    } else if (x===2){
        handSign = "Paper";
    } else {
        handSign = "Scissors";
    }
    return handSign;
}
// Write a function that plays a single round of Rock Paper Scissors. 
// The function should take two parameters - the playerSelection and computerSelection - and then
// return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
// Make your function’s playerSelection parameter case-insensitive 
// (so users can input rock, ROCK, RocK or any other variation).

function playSingleRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    if (playerSelection === 'Rock' && computerSelection === 'Paper'||
    playerSelection === 'Paper' && computerSelection === 'Scissors'||
    playerSelection === 'Scissors' && computerSelection === 'Rock'){
        return("You lose! " + computerSelection + " beats " + playerSelection + ".");
    } else {
        return("You win! Congratulations!");
    }
}