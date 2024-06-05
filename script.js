let choices = ['Rock', 'Paper', 'Scissors'];

const getComputerChoice = () => {
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
};


const getHumanChoice = () => {
    let humanChoice;
    
    while (true) {
        humanChoice = prompt("Choose one: Rock, Paper, Scissors"); // removed let
        const formattedChoice = humanChoice[0].toUpperCase() + humanChoice.slice(1).toLowerCase ();
        
        if (choices.includes(formattedChoice)) {
            humanChoice = formattedChoice;
            break;
        } else {
            console.log("Not a valid input, please try again.");
        }
    }
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    // Rock beats scissors
    // Scissors beats paper
    // Paper beats Rock

    console.log('You chose: ' + humanChoice);
    console.log('Computer chose: ' + computerChoice);
    if (humanChoice === computerChoice) {
        console.log("It's a tie!")
    } else if (
        (humanChoice === "Rock" && computerChoice === "Scissors") || 
        (humanChoice === "Scissors" && computerChoice === "Paper") || 
        (humanChoice === "Paper" && computerChoice === "Rock")
    ) {
        console.log("You won.");
        humanScore++;
        console.log("Your score: " + humanScore);
        console.log("Computer score: " + computerScore);
    } else {
        console.log("You lost!");
        computerScore++;
        console.log("Your score: " + humanScore);
        console.log("Computer Score: " + computerScore);
    }
};

function playGame(rounds) { // playGame should get the choices each round, not once before the game start
    for (let i = 0; i < rounds; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice); // playRound shouldn't be called immediately
    }
    console.log(`Final Score: \nHuman: ${humanScore} - Computer: ${computerScore}`);
    // `` not ''
};

playGame(5);
