function getComputerChoice() {
    let choice = parseInt(Math.random() *100)  % 3 
    console.log(choice)
    if(choice == 0) {
        return 'Rock'
    } else if(choice==1) {
        return 'Paper'
    } else if(choice == 2) {
        return 'Scissors'
    }
}

function play(playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.toLowerCase().slice(1)
    computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.toLowerCase().slice(1)
    if( (playerSelection == "Paper" && computerSelection == "Rock")  || 
    (playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Scissors" && computerSelection == "Paper") ) {
        return "You Win! " + playerSelection + " beats " + computerSelection 
    } else{
        return "You Lose! " + computerSelection + " beats " +  playerSelection
    }
}

function game() {
    for(let i = 0; i < 5; i++) {
        playerInput = prompt("Pick Rock, Paper, or Scissors: ")
        computerInput = getComputerChoice()
        console.log(play(playerInput, computerInput))
    }
}

game()