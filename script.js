let computerScore = 0;
let playerScore = 0;

function nextRound(){
    if (computerScore == 5 || playerScore == 5){
        console.log('Game Over');
        if (computerScore == 5){
            console.log('Computer wins');
        }
        else{
            console.log('Player wins');
        }
    }
    else{
        console.log('Player: ' + playerScore);
        console.log('Computer: ' + computerScore);
        playerChoice = getPlayerChoice();
        computerChoice = getComputerChoice();
        playGame(playerChoice, computerChoice);
    }
}

function getComputerChoice() {
    let compChoice;
    let compNum = Math.floor(Math.random() * 3);
    if (compNum == 0) {
        return 'rock';
    }
    else if (compNum == 1) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

function getPlayerChoice() {
    let pChoice = prompt('Rock, Paper, or Scissors?', '');
    return pChoice.toLowerCase();
}

function playGame(playerChoice, computerChoice) {
    if (playerChoice == computerChoice){
        console.log('Tie');
        nextRound();
    }
    else if (
    (playerChoice == 'rock' && computerChoice == 'scissors') || 
    (playerChoice == 'paper' && computerChoice == 'rock') || 
    (playerChoice == 'scissors' && computerChoice == 'paper')
    ){
        playerScore++;
        console.log('Player wins round');
        nextRound();
    }
    else{
        computerScore++;
        console.log('Computer wins round');
        nextRound();
    }
}

playerChoice = getPlayerChoice();
computerChoice = getComputerChoice();
playGame(playerChoice, computerChoice);