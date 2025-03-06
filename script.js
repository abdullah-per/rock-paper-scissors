const buttons = document.querySelector(".buttons");
const compDiv = document.querySelector(".comp-move");
const results = document.querySelector(".result");

buttons.addEventListener("click", (event) => {
    getResults(event.target.classList.value, getCompMove());
})


function getCompMove() {
    let randomValue = Math.floor(Math.random() * 3);

    if (randomValue < 1) {
        return "rock";
    } else if (randomValue < 2) {
        return "paper";
    } else {
        return "scissor";
    }
}

function getResults(playerMove, computerMove) {
    let winner = "";

    if (playerMove == "rock" && computerMove == "scissor") {
        winner = "player";
    } else if (playerMove == "scissor" && computerMove == "paper") {
        winner = "player";
    } else if (playerMove == "paper" && computerMove == "rock") {
        winner = "player";
    } else if (playerMove == computerMove) {
        winner = "none";
    } else {
        winner = "computer";
    }

    compDiv.textContent = computerMove;
    results.textContent = winner + " wins!"
}