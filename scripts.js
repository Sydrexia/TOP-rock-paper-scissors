function returnChoice(){
    let options = ['rock', 'paper', 'scissors'];
    let choice = options[(Math.floor(Math.random() * 3) + 1)];
    let input = document.getElementById("choice").value;
    input = input.toLowerCase();
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
            alert("Looks like you lose! Rock loses to paper!")
        } else { alert("You win! Rock beats scissors!")}
    }
    
    function compareChoiceIfPaper(){
        if (input == 'paper' && choice == 'paper') {
            alert("It's a tie! You both chose paper.")
        } else if (input == 'paper' && choice == 'scissors') {
            alert("Looks like you lose! Paper loses to scissors!")
        } else { alert("You win! Paper beats rock!")}
    }
    
    function compareChoiceIfScissors(){
        if (input == 'scissors' && choice == 'scissors') {
            alert("It's a tie! You both chose scissors.")
        } else if (input == 'scissors' && choice == 'rock') {
            alert("Looks like you lose! Scissors loses to rock!")
        } else { alert("You win! Scissors beats paper!")}
    }
}

