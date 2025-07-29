 let computerScore = 0;
 let humanScore = 0;

 let messageScore = `Computers score: ${computerScore} Your score: ${humanScore}`;

 console.log(messageScore);

let randomNumber = parseInt(Math.random() * 100);
function getComputerChoice(){

        if (randomNumber <= 33){
              return "rock";
        }
          else if (randomNumber > 33 && randomNumber < 66){
            return "paper";
        }
          if (randomNumber >= 66){
            return "scissors";
        }
}

function getHumanChoice(){
    prompt("Rock, Paper, Scissors?").toLowerCase();
}


function playRound(humanChoice, computerChoice){
    console.log("Computers choice: " + computerChoice);
    console.log("Your choice: " + humanChoice);
    //IF computer winns
     if( (humanChoice == "rock" && computerChoice == "paper")
      || ( humanChoice == "paper" && computerChoice == "scissors" ) 
      || (humanChoice == "scissors" && computerChoice == "rock") )
     {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);    
       // IF human winns
    else if( (computerChoice == "scissors" && humanChoice == "rock") 
      || (computerChoice == "paper" && humanChoice == "scissors")
   || (computerChoice == "rock" && humanChoice == "paper") )
     {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
     }
     else console.log("No points! Do it again!");
  // log a score
     console.log(messageScore);
}


// 5 rounds

function playGame(){



        for(i=1; i<=5; i++){

            let b = getHumanChoice();
            let a = getComputerChoice();
             console.log("Round number: " + i );
             playRound(b,a);
        }
        console.log("5 rounds are done!")
        //winner is?

        if (humanScore > computerScore){
            console.log("You are the winner! After 5 rounds you have " + humanScore + " points and computer has " + computerScore + " points.");
        }
        else if (humanScore < computerScore){
            console.log("You lost! After 5 rounds you have " + humanScore + " points and computer has " + computerScore + " points. Computer winns!");
        }
        else {
             
            console.log("We have no winner! After 5 rounds you have " + humanScore + " points and computer has " + computerScore + " points.");
        }
        
}
 playGame();