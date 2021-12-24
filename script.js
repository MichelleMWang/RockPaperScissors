/*press button, indicate which button 
depending on button, assign pIndex
compare as usual
update score by textContent 
 */
let buttons = document.querySelectorAll('.rpsButton'); 
let playerScore = document.getElementById('player-score'); 
let computerScore = document.getElementById('computer-score'); 
let roundsLeft = document.getElementById('rounds-left'); 
let container = document.getElementById('scores'); 

let choice = ['rock', 'paper', 'scissors']; 
let remainingRounds = 5; 
let pScore = 0; 
let cScore = 0; 

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (remainingRounds > 1){
            remainingRounds--; 
            roundsLeft.textContent = remainingRounds; 
        
            playerPlay(computerPlay(), parseInt(button.id)); 
    
        } else if (remainingRounds == 1){
            remainingRounds--; 
            roundsLeft.textContent = remainingRounds; 
        
            playerPlay(computerPlay(), parseInt(button.id)); 
            endGame(); 
        } else {
        }  
    }); 
}); 

function computerPlay() {
    let index = Math.floor(Math.random()*3); 
    console.log(choice[index]); 
    console.log('p score: ' + pScore); 
    console.log('c score: ' + cScore); 
    return index; 
}
function playerPlay(cIndex, pIndex) {
    if ((pIndex -1) == cIndex || (pIndex + 2) == cIndex){
        playerScore.textContent = ++pScore;
    } else if (pIndex != cIndex){
        computerScore.textContent = ++cScore;
    } else {console.log('draw'); }
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
        container.appendChild(outcome); 

        let resetButton = document.createElement('button'); 
        resetButton.textContent = 'reset game'; 
        resetButton.addEventListener('click', () => {
            reset(); 
            outcome.remove(); 
            resetButton.remove(); 
        }); 
        container.appendChild(resetButton); 
    }
}

function reset() {
    pScore = 0; 
    cScore = 0; 
    remainingRounds = 5; 
    playerScore.textContent = pScore; 
    computerScore.textContent = cScore; 
    roundsLeft.textContent = remainingRounds; 
}
