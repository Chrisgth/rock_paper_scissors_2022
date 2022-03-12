// Create a function that returns either Rock, Paper or Scissors
function computerPlay(){
    let x;
    let handSign;
    x = Math.floor((Math.random() * 3) +1);
// Can be replaced with switch
    if (x===1){
        handSign = 'Rock';
    } else if (x===2){
        handSign = 'Paper';
    } else {
        handSign = 'Scissors';
    }
    return handSign;
}
// Write a function that plays a single round of Rock Paper Scissors. 
// The function should take two parameters - the playerSelection and computerSelection - and then
// return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
// Make your function’s playerSelection parameter case-insensitive 
// (so users can input rock, ROCK, RocK or any other variation).

function playSingleRound(playerSelection, computerSelection){
    computerSelection = computerPlay();
    if (playerSelection === 'Rock' && computerSelection === 'Paper'||
    playerSelection === 'Paper' && computerSelection === 'Scissors'||
    playerSelection === 'Scissors' && computerSelection === 'Rock'){
        return 'loser';
    } else if (playerSelection===computerSelection){
        return 'draw';
    } else{
        return 'win';
    }
}

// Write a NEW function called game(). 
// Call the playRound function inside of this one to play a 5 round game
// that keeps score and reports a winner or loser at the end.

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++){
        playerSelection = prompt("Please enter your selection")
        playerSelection = playerSelection.toLowerCase();
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
        if (!(playerSelection === 'Rock') && !( playerSelection === 'Paper') && !(playerSelection === 'Scissors')){
            alert("Please enter either rock paper or scissors!")
            i--;
        } else {
           let singleRound = playSingleRound(playerSelection)
           if (singleRound === 'loser'){
               computerScore++;
               console.log('You lost! The score is '+playerScore+ ' - '+computerScore);
           } else if (singleRound === 'draw'){
               console.log('Draw!');
           } else {
               playerScore++;
               console.log('You won! The score is '+playerScore+ ' - '+computerScore);
           }
        }
    }   
    if (playerScore>computerScore){
        alert("Congratulations! You won the best of 5!")
    } else if (playerScore<computerScore){
        alert("You lost the best of 5! Better luck next time.")
    } else {
        alert("It's a draw!")
    }
}