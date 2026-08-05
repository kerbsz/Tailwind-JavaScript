const choices = ["rock", "paper", "scissors"];
const PscoreDisplay = document.querySelector("#PscoreDisplay");
const CscoreDisplay = document.querySelector("#CscoreDisplay");
const tiescoreDisplay = document.querySelector("#tie");
let computerpick = document.querySelector("#computerpick");
let compickname = document.querySelector("#compickname");
let pscore = 0;
let cscore = 0;
let tiescore = 0;

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    console.log("Computer chose:", computerChoice);
    let result = "";

    
    if (playerChoice === computerChoice) {
        result = "tie";
    } else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "You Win" : "You Lose";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "You Win" : "You Lose";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "You Win" : "You Lose";
                break;
        }
    }

    updateComputerPick(computerChoice);

    switch (result) {
        case "You Win":
            pscore++;
            PscoreDisplay.textContent = `Player Win/s: ${pscore}`;
            break;
        case "You Lose":
            cscore++;
            CscoreDisplay.textContent = `Comp Win/s: ${cscore}`;
            break;
        case "tie":
            tiescore++;
            tiescoreDisplay.textContent = `Tie/s: ${tiescore}`;
            break;
    }
}

function updateComputerPick(choice) {
    switch (choice) {
        case "rock":
            computerpick.src = "img/stone.png";
            compickname.textContent = "Rock";
            break;
        case "paper":
            computerpick.src = "img/paper.png";
            compickname.textContent = "Paper";
            break;
        case "scissors":
            computerpick.src = "img/scissor.png";
            compickname.textContent = "Scissors";
            break;
    }
}
function restart(){
    pscore = 0;
        PscoreDisplay.textContent = `Player Win/s: ${pscore}`;
    cscore = 0;
        CscoreDisplay.textContent = `Comput Win/s: ${cscore}`;
    tiescore = 0;
        tiescoreDisplay.textContent = `Tie/s: ${tiescore}`;
}
