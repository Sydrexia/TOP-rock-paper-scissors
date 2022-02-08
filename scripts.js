let playerScore = 0
let computerScore = 0

const rock = document.querySelector('#rock');
rock.addEventListener('click', choiceRock);

const paper = document.querySelector('#paper');
paper.addEventListener('click', choicePaper);

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', choiceScissors);


function playMatch() {
    while (playerScore < 5 && computerScore < 5) {
        returnChoice();
    }
    if (computerScore == 5) {
        playerScore = 0;
        computerScore = 0;
        document.getElementById('p-score').innerHTML = playerScore;
        document.getElementById('c-score').innerHTML = computerScore;
        alert("You lose...");
    } else if (playerScore == 5) {
        playerScore = 0;
        computerScore = 0;
        document.getElementById('p-score').innerHTML = playerScore;
        document.getElementById('c-score').innerHTML = computerScore;
        alert("You win!")
    }
}

function returnChoice(){
    let options = ['rock', 'paper', 'scissors'];
    let choice = options[(Math.floor(Math.random() * 3) + 1)];
    // let input = prompt("Please enter rock, paper, or scissors.")
    // input = input.toLowerCase();
    if (input != 'rock' && input != 'paper' && input != 'scissors' ){
        alert('Please choose rock, paper, or scissors.')
    } else if (input == 'rock') {
        compareChoiceIfRock();
    } else if (input == 'paper') {
        compareChoiceIfPaper();
    } else if (input == 'scissors') {
        compareChoiceIfScissors();
    }
    
    function compareChoiceIfRock(){
        if (input == 'rock' && choice == 'rock') {
            alert("It's a tie! You both chose rock.")
        } else if (input == 'rock' && choice == 'paper') {
            alert("Looks like you lose! Rock loses to paper!");
            computerScore++;
        } else { alert("You win! Rock beats scissors!");
            playerScore++;    
        }
        document.getElementById('p-score').innerHTML = playerScore;
        document.getElementById('c-score').innerHTML = computerScore;    
    }
    
    function compareChoiceIfPaper(){
        if (input == 'paper' && choice == 'paper') {
            alert("It's a tie! You both chose paper.")
        } else if (input == 'paper' && choice == 'scissors') {
            alert("Looks like you lose! Paper loses to scissors!");
            computerScore++;
        } else { alert("You win! Paper beats rock!");
            playerScore++;
        }
        document.getElementById('p-score').innerHTML = playerScore;
        document.getElementById('c-score').innerHTML = computerScore;
    }
    
    function compareChoiceIfScissors(){
        if (input == 'scissors' && choice == 'scissors') {
            alert("It's a tie! You both chose scissors.")
        } else if (input == 'scissors' && choice == 'rock') {
            alert("Looks like you lose! Scissors loses to rock!");
            computerScore++;
        } else { alert("You win! Scissors beats paper!");
            playerScore++;
        }
        document.getElementById('p-score').innerHTML = playerScore;
        document.getElementById('c-score').innerHTML = computerScore;
    }
}

function choiceRock() {
    input = 'rock';
    returnChoice();
}

function choicePaper() {
    input = 'paper';
    returnChoice();
}

function choiceScissors() {
    input = 'scissors';
    returnChoice();
}

// At this point, my next objective is to fill out these three above functions
// now that I have my event listeners in place.