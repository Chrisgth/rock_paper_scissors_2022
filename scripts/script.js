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

let playerScore = 0;
let computerScore = 0;
function gameWonText(){
    score.textContent = 'The score is: ' + playerScore + ' - ' + computerScore + '. Congratulations! You won the game!';
    playerScore = 0;
    computerScore = 0
}
function gameLostText(){
    score.textContent = 'The score is: ' + playerScore + ' - ' + computerScore + '. You lost the game. Better luck next time!';
    playerScore = 0;
    computerScore = 0;
}
function playSingleRound(playerSelection, computerSelection){

    const result = document.querySelector('#results')
    computerSelection = computerPlay();
    if (playerSelection === 'Rock' && computerSelection === 'Paper'||
    playerSelection === 'Paper' && computerSelection === 'Scissors'||
    playerSelection === 'Scissors' && computerSelection === 'Rock'){
        result.textContent = 'You lost the round!'
        if(computerScore < 4){
            computerScore += 1;
            score.textContent = 'The score is: ' + playerScore + ' - ' + computerScore;
        } else {
            computerScore += 1;
            gameLostText();
        }
    } else if (playerSelection===computerSelection){
        result.textContent = 'Round draw!'
    } else{
        result.textContent = 'You won the round!'
        if(playerScore < 4){
            playerScore += 1;
            score.textContent = 'The score is: ' + playerScore + ' - ' + computerScore;
        } else {
            playerScore += 1
            gameWonText();
        }
    }
}

// Write a NEW function called game(). 
// Call the playRound function inside of this one to play a 5 round game
// that keeps score and reports a winner or loser at the end.

// Create three buttons, one for each selection. Add an event listener to the buttons that call 
// your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)

const rockbtn = document.querySelector('#rock');
const paperbtn = document.querySelector('#paper');
const scissorsbtn = document.querySelector('#scissors');

rockbtn.addEventListener('click', () => {playSingleRound('Rock');});
paperbtn.addEventListener('click', () => {playSingleRound('Paper');});
scissorsbtn.addEventListener('click', () => {playSingleRound('Scissors');});

// Add a div for displaying results and change all of your console.logs into DOM methods.
// Display the running score, and announce a winner of the game once one player reaches 5 points.
const score = document.querySelector('#score');


