// rock paper scissors

function game(numberOfGames){


for (let i=0; i<numberOfGames; i++){


let choices = ["rock", "paper", "scissors"]
let random = Math.random() * 3


let userChoice = choices[0];
let computerChoice = choices[Math.floor(random)]


console.log(`User's choice: ${userChoice}`)
console.log(`Computer's choice: ${computerChoice}`)

// rock beats scissors
// paper beats rock
// scissors beats paper

let actionObject = {
    'rock':'scissors',
    'paper':'rock',
    'scissors': 'paper',
}

determineWinner(userChoice, computerChoice)


function determineWinner(userAction, computerAction){

    if (userAction === computerAction){
        console.log( "Tie")
    }

    if ( actionObject[userAction] === computerAction){
        console.log( "User has won")
    } 
    
    else if ( actionObject[computerAction] === userAction) {

        console.log( "Computer has won")
    }
    console.log("\n")
}
}
    
}


game(20)
