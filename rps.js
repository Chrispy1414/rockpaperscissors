const getRock = document.getElementById('rock');
const getPaper = document.getElementById('paper');
const getScissors = document.getElementById('scissors');

let playerScore = 0;
let compScore = 0;
let result = '';

const userScoreDisplay = document.querySelector('#userScoreDisplay');
const compScoreDisplay = document.querySelector('#compScoreDisplay');
const resultDisplayText = document.querySelector('#resultDisplay');
const resultHeader = document.querySelector('#resultHeader');

const displayResultDisplay = document.createElement('div');
const displayPlayerScore = document.createElement('div');
const displayCompScore = document.createElement('div');
const playerScoreHeader = document.createElement('h1');
const compScoreHeader = document.createElement('h1');
const resultDisplayHeader = document.createElement('h1');
playerScoreHeader.setAttribute('id', 'scoreHeader');
displayPlayerScore.classList.add('scores');
displayCompScore.classList.add('scores');
displayResultDisplay.classList.add('scores');
playerScoreHeader.textContent = 'Player Score';
compScoreHeader.textContent = 'Comp Score';
resultDisplayHeader.textContent = 'Round Result';
displayPlayerScore.textContent = playerScore;
displayCompScore.textContent = compScore;
displayResultDisplay.textContent = result;



userScoreDisplay.appendChild(playerScoreHeader);
userScoreDisplay.appendChild(displayPlayerScore);
compScoreDisplay.appendChild(compScoreHeader);
compScoreDisplay.appendChild(displayCompScore);
resultHeader.appendChild(resultDisplayHeader);
resultHeader.appendChild(displayResultDisplay);


function getComputerChoice(){
    let answers = ['rock','paper','scissors'];
    let randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    return randomAnswer;
}

function playRound(playerChoice){
    const computerChoice = getComputerChoice();
    if (playerChoice == computerChoice){
     result = ('Its a tie.');
     return result;
    }else if(playerChoice == 'paper' && computerChoice == 'scissors'){
     ++compScore;
     result = ('Scissors beats paper! You lose');
     return result;
    }else if(playerChoice == 'paper' && computerChoice == 'rock'){
     ++playerScore;
     result = ('You Win! Paper beats rock.');
     return  result;
    }else if(playerChoice == 'rock' && computerChoice == 'paper'){
     ++compScore;
     result = ('Paper beats Rock! You lose');
     return result;
    }else if(playerChoice == 'rock' && computerChoice == 'scissors'){
     ++playerScore;
     result = ('You win! Rock beats scissors.');
     return result;
    }else if(playerChoice == 'scissors' && computerChoice == 'rock'){
     ++compScore;
     result = ('Rock beats Scissors! You lose');
     return result;
    }else if(playerChoice == 'scissors' && computerChoice == 'paper'){
     ++playerScore;
     result = ('You Win! Scissors beats Paper');
     return result;
 }
}

function main() {
    getRock.addEventListener("click",function() {
      playRound("rock")
      game();
    })
    
    getPaper.addEventListener("click",function() {
      playRound("paper");
      game();
    })
    
    getScissors.addEventListener("click",function() {
      playRound("scissors");
      game();
    })
    }
    
main();

function game(){
        playRound();  //add button to activate play round. Give error when not selecting rps before.
        console.log(result);
        console.log(playerScore, compScore);
        displayResultDisplay.textContent = result;
        displayPlayerScore.textContent = playerScore; 
        displayCompScore.textContent = compScore;
}