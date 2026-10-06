let playerScore = 0;
let computerScore = 0;

function computerChoice(){
    let choice = Math.random() * 3;


    if(choice >= 2){
        return "rock";
    }else if(choice >= 1){
        return "paper";
    }else{
        return "scissors";
    }

    
}

function playerChoice(){
    let choice = prompt("Enter rock, paper, or scissors: ");
    choice = choice.toLowerCase();

    return choice;
}


function playRound(playerChoice, compChoice){
    console.log("Player choice: " + playerChoice);
    console.log("Computer choice: " + compChoice);

    if(playerChoice == compChoice){
        console.log("It's a tie!");
        return;
    }else if(playerChoice == "rock" && compChoice == "paper"){
        console.log("You lose! Paper beats Rock!");
        computerScore++;
    }else if(playerChoice == "rock" && compChoice == "scissors"){
        console.log("You win! Rock beats Scissors!");
        playerScore++;
    }else if(playerChoice == "paper" && compChoice == "rock"){
        console.log("You win! Paper beats Rock!");
        playerScore++;
    }else if(playerChoice == "paper" && compChoice == "scissors"){
        console.log("You lose! Scissors beats Paper!");
        computerScore++;
    }else if(playerChoice == "scissors" && compChoice == "paper"){
        console.log("You win! Scissors beats Paper!");
        playerScore++;
    }else{
        console.log("You lose! Rock beats Scissors!");
        computerScore++;
    }
}

function playGame(){
    for(let i = 1; i<=5; i++){
        console.log("----Round "+i+"----");
        playRound(playerChoice(), computerChoice());
        console.log("Player score: " + playerScore);
        console.log("Computer score: " + computerScore);
    }

    if(computerScore > playerScore){
        console.log("Computer wins!");
    }else{
        console.log("Player wins!");
    }
}

playGame();

