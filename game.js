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




  // if (action1 === 'rock'){ 

    //     if (action2 === 'scissors'){
    //         return action1

    //     } else if (action2 === 'paper') {
    //         return action2
    //     }
    // } 

    // else if (action1 === 'scissors'){ 

    //     if (action2 === 'rock'){
    //         return action2
            
    //     } else if (action2 === 'paper') {
    //         return action1
    //     }

    // } else if (action1 === 'paper'){ 

    //     if (action2 === 'rock'){
    //         return action1
            
    //     } else if (action2 === 'scissors') {
    //         return action2
    //     }

    // }





// if ( userChoice === 'rock' && computerChoice === 'scissors' ){
//     console.log("User wins")

// } else if ( userChoice === 'rock' && computerChoice === 'paper' ){
//     console.log("Computer wins")

// } else if ( userChoice === 'paper' && computerChoice === 'rock' ){

//     console.log("User wins")

// } else if ( userChoice === 'paper' && computerChoice === 'scissors' ){

//     console.log("Computer wins")

// } else if ( userChoice === 'scissors' && computerChoice === 'rock' ){

//     console.log("Computer wins")

// } else if ( userChoice === 'scissors' && computerChoice === 'paper' ){
//     console.log("User wins")

// } else {

//     console.log("It is a TIE")
// }