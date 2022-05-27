 
 
 // Function that randomly returns "Rock", "Paper", "Scissors" for comp //

 function computerPlay() {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random()*options.length)];       
}

computerSelection = computerPlay();


// Function that plays a round every time the user clicks "Rock", "Paper" or "Scissors" button

const buttons = document.querySelectorAll("button");

let playerSelection;

for (const button of buttons) {
    button.addEventListener("click", function(e) {
        playerSelection = (e.target.id);
        computerSelection = computerPlay();
        playRound(playerSelection,computerSelection);
        endGame();
    })
}


// Function that plays one round 

let playerScore = document.querySelector("#pScore");
let computerScore = document.querySelector("#cScore");
let roundOutcome = document.querySelector("#rOutcome");
playerScore.value = 0;
computerScore.value = 0; 

function playRound(playerSelection, computerSelection) {
    playerScore.innerHTML = playerScore.value;
    computerScore.innerHTML = computerScore.value;
    if (playerSelection === "rock" && computerSelection === "scissors") {
        ++playerScore.value;
        roundOutcome.textContent = "You win! Rock beats Scissors.";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        ++playerScore.value;
        roundOutcome.textContent = "You win! Paper beats Rock.";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        ++playerScore.value;
        roundOutcome.textContent = "You win! Scissors beats Paper.";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        ++computerScore.value;
        roundOutcome.textContent = "You lose! Paper beats Rock.";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        ++computerScore.value;
        roundOutcome.textContent = "You lose! Scissors beat Paper.";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        ++computerScore.value;
        roundOutcome.textContent = "You lose! Rock beats Scissors.";
    } else if (playerSelection === "rock" && computerSelection === "rock") {
        roundOutcome.textContent = "It's a tie! You both picked Rock."
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        roundOutcome.textContent = "It's a tie! You both picked Scissors.";
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        roundOutcome.textContent = "It's a tie! You both picked Paper."; 
    } else {
        roundOutcome.textContent ="Error, try again";
    }
}

// Function that ends game when comp or user get to 5 wins.          

function endGame () { 
    playerScore.innerHTML = playerScore.value;
    computerScore.innerHTML = computerScore.value;
    if (playerScore.value === 5) {
    roundOutcome.textContent = "Game Over. You win!" ;
    for (button of buttons) {
        button.disabled = true;
    }
    } else if (computerScore.value === 5) {
    roundOutcome.textContent = "Game Over. You lose!";
    for (button of buttons) {
        button.disabled = true; 
    }
    }
}