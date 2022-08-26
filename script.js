const playerScore = document.querySelector('.player-score');
const compScore = document.querySelector('.comp-score');
const buttons = document.querySelectorAll('.choice');
const reset = document.querySelector('.reset-button');
const results = document.querySelector('.round-results');

//Initializing score display
let pScore = 0;
playerScore.textContent = pScore;
let cScore = 0;
compScore.textContent = cScore;

//Assign functions to buttons
buttons.forEach((button) => {
    button.addEventListener('click', getPlayerChoice);
});
reset.addEventListener('click', resetGame);

function getPlayerChoice(event){
    playGame(event.target.textContent);
}

function getComputerChoice() {
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

function displayResults(playerChoice, computerChoice, result){
    results.textContent = `Player chose ${playerChoice}, Computer chose ${computerChoice}, ${result}`;
    switch (result){
        case 'Round Tie.':
            break;
        case 'Player Wins!':
            pScore++;
            playerScore.textContent = pScore;
            break;
        case 'Computer Wins.':
            cScore++;
            compScore.textContent = cScore;
            break;
    }
}

function playGame(playerChoice) {
    let computerChoice = getComputerChoice();
    if (playerChoice == computerChoice){
        // Tie
        displayResults(playerChoice, computerChoice, 'Round Tie.');

    }
    else if (
    (playerChoice == 'rock' && computerChoice == 'scissors') ||   
    (playerChoice == 'paper' && computerChoice == 'rock') || 
    (playerChoice == 'scissors' && computerChoice == 'paper')
    ){
        // Player wins round
        displayResults(playerChoice, computerChoice, 'Player Wins!');
    }
    else{
        // Computer wins round
        displayResults(playerChoice, computerChoice, 'Computer Wins.');
    }
}

function resetGame(event){
    results.textContent = '';
    pScore = 0;
    playerScore.textContent = pScore;
    cScore = 0;
    compScore.textContent= cScore;
}