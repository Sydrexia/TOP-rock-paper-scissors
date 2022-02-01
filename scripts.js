function returnChoice(){
    let input = document.getElementById("choice").value;
    input = input.toLowerCase();
    if (input != 'rock' || 'paper' || 'scissors' ){
        alert('Please choose rock, paper, or scissors.')
    }else {
        
    }
}

function computerChoice(){
    let options = ['rock', 'paper', 'scissors']
    let choice = options[(Math.floor(Math.random() * 10) + 1)];
}
