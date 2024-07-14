console.log("hello everyone");

let humanScore = 0;
let computerScore = 0;



function getComputerChoice() {

    const options = ["rock", "paper", "scissors"];

    const randomInt = Math.floor(Math.random() * options.length);

    const selectedOption = options[randomInt];

    return selectedOption;
    
}

function getHumanChoice() {

    let humanOption = prompt("Rock, paper or scissors?");

    const options = ["rock", "paper", "scissors"];

    if (options.includes(humanOption.toLowerCase())) {
        return humanOption;
    } else {
        return getComputerChoice();

    }

}



function playRound(computerChoice, humanChoice) {

    humanChoice = humanChoice.toLowerCase();

    if (computerChoice === humanChoice) {
        return `It's a tie! Human score: ${humanScore} Computer score: ${computerScore}`;
    } 

    if (
        (computerChoice === "scissors" && humanChoice == "paper") ||
        (computerChoice === "paper" && humanChoice == "rock") ||
        (computerChoice === "rock" && humanChoice == "scissors")
        ) {

            computerScore++;
            return `You lose! ${computerChoice} beats ${humanChoice}. Human score: ${humanScore} Computer score: ${computerScore}`;
        }

        else {
            humanScore++;
            return `You win! ${humanChoice} beats ${computerChoice}. Human score: ${humanScore} Computer score: ${computerScore}`;
        }
}


    



function playGame() {

    computerScore = 0;
    humanScore = 0;

    for (let i=0; i<5; i++ ) {
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();
        const roundResult = playRound(computerChoice, humanChoice);
        console.log(roundResult);
        

    }

    if (computerScore === humanScore) {
        return "It's a tie!";
    }

    else if (computerScore > humanScore) {
        return `The computer wins with ${computerScore} points`;
    }

    else {
        return `You win with ${humanScore} points!`
    }
    

    

}