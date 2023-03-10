function rockPaperScissors(playerTurn) {

    const rock = "Rock";
    const paper = "Paper";
    const scissors = "Scissors";

    if (playerTurn === "r" || playerTurn === "rock") {
        playerTurn = rock;
    } else if (playerTurn === "p" || playerTurn === "paper") {
        playerTurn = paper;
    } else if (playerTurn === "s" || playerTurn === "scissors") {
        playerTurn = scissors;
    } else {
        console.log("Invalid input. Try again");
        return;
    }

    console.log(`You choose ${playerTurn}`);

    let computerRandomNumber = Math.floor(Math.random() * 3) + 1;

    switch (computerRandomNumber) {
        case 1: computerMove = rock; break;
        case 2: computerMove = paper; break;
        case 3: computerMove = scissors; break;
    }

    console.log(`The computer chooses ${computerMove}`);

    if (playerTurn === rock && computerMove === scissors || playerTurn === paper && computerMove === rock || playerTurn === scissors && computerMove === paper) {
        console.log("You win");
    } else if (playerTurn === rock && computerMove === paper || playerTurn === paper && computerMove === scissors || playerTurn === scissors && computerMove === rock) {
        console.log("You lose");
    } else {
        console.log("This game was a draw!");
    }

}
rockPaperScissors("r")