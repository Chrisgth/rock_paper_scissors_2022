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