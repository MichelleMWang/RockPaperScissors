let choice = ['rock', 'paper', 'scissors']; 
function computerPlay() {
    let index = Math.floor(Math.random()*3); 
    return choice[index]; 
}

function playerPlay() {
    return (window.prompt('rock, paper, or scissors?')).toLowerCase(); 
}
function round(playerSelection, computerSelection){
    cIndex = choice.indexOf(computerSelection); 
    pIndex = choice.indexOf(playerSelection); 
    if (cIndex == pIndex -1 || cIndex == pIndex +2) return 'you win! ' + playerSelection + ' beats ' + computerSelection; 
    else if (cIndex == pIndex) return "it's a draw! you both picked " + computerSelection; 
    else return 'you lose! ' + computerSelection + ' beats ' + playerSelection; 

}
console.log(round(playerPlay(), computerPlay())); 