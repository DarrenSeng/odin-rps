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

const body = document.querySelector('body')

const btnRock = document.createElement('button')
const btnPaper = document.createElement('button')
const btnScissors = document.createElement('button')
btnRock.textContent = "Rock";
btnRock.setAttribute("style", "margin: 5px; padding: 10px; font-size: 16px; background-color: #90EE90; border: none; cursor: pointer;");

btnPaper.textContent = "Paper";
btnPaper.setAttribute("style", "margin: 5px; padding: 10px; font-size: 16px; background-color: #ADD8E6; border: none; cursor: pointer;");

btnScissors.textContent = "Scissors";
btnScissors.setAttribute("style", "margin: 5px; padding: 10px; font-size: 16px; background-color: #FFB6C1; border: none; cursor: pointer;");

body.appendChild(btnRock)
body.appendChild(btnPaper)
body.appendChild(btnScissors)

const playerScore = document.createElement('div')
const computerScore = document.createElement('div')
playerScore.textContent = "0";
playerScore.setAttribute("style", "color: #32CD32; font-weight: bold; font-size: 24px; margin: 10px;");
computerScore.textContent = "0";
computerScore.setAttribute("style", "color: #FF4500; font-weight: bold; font-size: 24px; margin: 10px;");

body.appendChild(playerScore)
body.appendChild(computerScore)

const winner = document.createElement('div')
winner.setAttribute("style", "font-size: 20px; font-weight: bold; margin-top: 20px;");

function play(playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.toLowerCase().slice(1)
    computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.toLowerCase().slice(1)
    if( (playerSelection == "Paper" && computerSelection == "Rock")  || 
    (playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Scissors" && computerSelection == "Paper") ) {
        playerScore.textContent = String(parseInt(playerScore.textContent) + 1)
        if(playerScore.textContent == "5") {
            winner.textContent = "Player won"
            body.appendChild(winner)
        } 
        console.log("Player score " + playerScore.textContent)
        console.log("Computer score " + computerScore.textContent)
        return "Round goes to Player! " + playerSelection + " beats " + computerSelection 
    } else if(playerSelection == computerSelection) {
        return "You tied with " + playerSelection
    } else{
        computerScore.textContent = String(parseInt(computerScore.textContent) + 1)
        if(computerScore.textContent == "5" || parseInt(playerScore) <= 5) {
            winner.textContent = "Computer won"
            body.appendChild(winner)
        } 
        console.log("Player score " + playerScore.textContent)
        console.log("Computer score " + computerScore.textContent)
        return "Round goes to Computer! " + computerSelection + " beats " +  playerSelection
        
    }
}


function game() {

    const results = document.createElement('div')
    btnRock.addEventListener('click', () => {
        results.textContent = play("Rock", getComputerChoice()) 
        body.appendChild(results)
    })
    
    btnPaper.addEventListener('click', () => {
        results.textContent = play("Paper", getComputerChoice())
        body.appendChild(results)
    })
    
    btnScissors.addEventListener('click', () => {
        results.textContent = play("Scissors", getComputerChoice())
        body.appendChild(results)
    })
    
}

game()