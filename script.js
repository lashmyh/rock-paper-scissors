
console.log("hello everyone");

let humanScore = 0;
let computerScore = 0;
let currentRound = 1;

function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const randomInt = Math.floor(Math.random() * options.length);
    const selectedOption = options[randomInt];
    return selectedOption;
}

// update UI
function updateUI() {
    document.getElementById("human-score").textContent = humanScore;
    document.getElementById("computer-score").textContent = computerScore;
}

//update rounds
function updateRound() {
    document.getElementById("round").textContent = currentRound;
}

function getResult(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        return "It's a tie!";
    } 
    if (
        (computerChoice === "scissors" && humanChoice == "paper") ||
        (computerChoice === "paper" && humanChoice == "rock") ||
        (computerChoice === "rock" && humanChoice == "scissors")
        ) {
            computerScore++;
            return `You lose! ${computerChoice} beats ${humanChoice}`;
        }
        else {
            humanScore++;
            return `You win! ${humanChoice} beats ${computerChoice}.`;
        }
}



// button click handling
function handleButtonClick(event) {
    const humanChoice = event.target.dataset.choice;
    const computerChoice = getComputerChoice();
    resultMessage = getResult(computerChoice, humanChoice);

    document.getElementById("result-message").textContent = resultMessage; 
    updateUI();

    document.getElementById("round").textContent = currentRound;
    currentRound++;
    updateRound();

    if (currentRound == 6) {
        if (humanScore == computerScore) {
            alert("Game over! It's a tie!");
        }
        else if (humanScore > computerScore) {
            alert("Game over!! You win!")
        }
        else 
            alert("Game over!! You lose!")
        
        handleRestartClick();
    }

}

// restart game
function handleRestartClick() {
    humanScore = 0;
    computerScore = 0;
    document.getElementById('result-message').textContent = "Make your choice!";
    updateUI();
    currentRound = 1;
    updateRound();
}

// set up even listeners
function setupEventListeners() {
    const choiceButtons = document.querySelectorAll(".choice-btn");
    choiceButtons.forEach(button => {
        button.addEventListener("click", handleButtonClick);
    })


    const restartButton = document.querySelector(".restart-btn");
    restartButton.addEventListener("click", handleRestartClick);
}


// Initialise the game

setupEventListeners()

