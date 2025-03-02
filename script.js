//
function getComputerChoice() {
    randomNum = Math.floor(Math.random() * 10);
    
    if (randomNum <= 3) {
        return "rock";
    } else if (randomNum <= 6) {
        return "paper"
    } else {
        return "scissor"
    }
}

function getHumanChoice() {
    choice = prompt();
    return choice;
}


//
function playRound(humanChoice, computerChoice) {
    let caseFixed = humanChoice.toUpperCase();

    // console.log(humanChoice)
    // console.log(computerChoice)

    if (humanChoice === computerChoice) {
        console.log("TIE");
        return;
    }


    if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win!");
        humanScore += 1;
        return;
    }

    if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win!");
        humanScore += 1;
        return;
    }

    if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win!");
        humanScore += 1;
        return;
    }

    computerScore += 1;
    console.log("You lose!")

    return;
}


let humanScore = 0;
let computerScore = 0;

//
function playGame() {
   humanScore, computerScore = 0, 0;

    for (let i = 1; i <= 3; i++) {
        playRound(getHumanChoice(), getComputerChoice())
    }

    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
}

playGame()