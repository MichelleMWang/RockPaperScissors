/*press button, indicate which button 
depending on button, assign pIndex
compare as usual
update score by textContent 
 */
const rock = document.getElementById('rock-button'); 
const paper = document.getElementById('paper-button'); 
const scissors = document.getElementById('scissors-button');
let playerScore = document.getElementById('player-score'); 
let computerScore = document.getElementById('computer-score'); 
let roundsLeft = document.getElementById('rounds-left'); 
let container = document.getElementById('scores'); 

let choice = ['rock', 'paper', 'scissors']; 
let remainingRounds = 5; 
let pScore = 0; 
let cScore = 0; 

rock.addEventListener('click', () => {
    if (remainingRounds > 1){
        remainingRounds--; 
        roundsLeft.textContent = remainingRounds; 
    
    let cPlay = computerPlay(); 
    if (cPlay == 'scissors') { 
        playerScore.textContent = pScore++; 
    } else if (cPlay == 'paper'){
        computerScore.textContent = cScore++;
    } else {  }
    } else {
        roundsLeft.textContent = 0; 
        endGame(); 
    } ; 

   
}); 
paper.addEventListener('click', () =>{ if (remainingRounds > 1){
    remainingRounds--; 
    roundsLeft.textContent = remainingRounds; 

    let cPlay = computerPlay(); 
    if (cPlay == 'rock') { 
        playerScore.textContent = pScore++; 
    } else if (cPlay == 'scissors'){
        computerScore.textContent = cScore++;
    } else {  }
    } else {
        roundsLeft.textContent = 0; 
        endGame(); 
        } 
}); 

scissors.addEventListener('click', () => { if (remainingRounds > 1){
    remainingRounds--; 
    roundsLeft.textContent = remainingRounds; 

    let cPlay = computerPlay(); 
    if (cPlay == 'paper') { 
        playerScore.textContent = pScore++; 
    } else if (cPlay == 'rock'){
        computerScore.textContent = cScore++;
    } else {  }
    } else {
        roundsLeft.textContent = 0; 
        endGame(); 
        } 
});

function computerPlay() {
    let index = Math.floor(Math.random()*3); 
    return choice[index]; 
}

function endGame(){
    remainingRounds--; 
    if (remainingRounds < -1){

    } else {
    let outcome = document.createElement('div');
    
    if (pScore > cScore){
        outcome.textContent = 'player wins!'; 
    } else if (pScore < cScore){
        outcome.textContent = 'computer wins!'; 
    } else {
        outcome.textContent = 'it was a draw!'; 
    }
    container.appendChild(outcome); }
}
