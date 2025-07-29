 let computerScore = 0;
 let humanScore = 0;

 let messageScore = `Computers score: ${computerScore} Your score: ${humanScore}`;

 console.log(messageScore);

 //computer choice
function getComputerChoice(){
        let randomNumber = parseInt(Math.random() * 100);

        if (randomNumber <= 33){
              return "rock";
        }
          else if (randomNumber > 33 && x < 66){
            return "paper";
        }
          if (randomNumber >= 66){
            return "scissors";
        }

}


 
//users choice


function getHumanChoice(){
   let y = prompt("Rock, Paper, Scissors?");
    return y.toLowerCase();
}




//single round

function playRound(humanChoice, computerChoice){
    console.log("Computers choice: " + computerChoice);
    console.log("Your choice: " + humanChoice);
    //IF computer winns
     if(humanChoice == "rock" && computerChoice == "paper")
     {
        computerScore++;
        console.log("You lose! Paper beats rock");
         
     }
     else if(humanChoice == "paper" && computerChoice == "scissors")
     {
        computerScore++;
        console.log("You lose! Scissors beat paper");
         
     }
     else if(humanChoice == "scissors" && computerChoice == "rock")
     {
        computerScore++;
        console.log("You lose! Rock beats scissors");
         
     }
       // IF user winns

    else if(computerChoice == "scissors" && humanChoice == "rock")
     {
        humanScore++;
        console.log("You win! Rock beats scissors");
         
     }
     else if(computerChoice == "paper" && humanChoice == "scissors")
     {
        humanScore++;
        console.log("You win! Scissors beat paper");
         
     }

     else if(computerChoice == "rock" && humanChoice == "paper")
     {
        humanScore++;
        console.log("You win! Paper beats rock");
         
     }
     else console.log("No points! Do it again!");
  // log a score
     console.log("Computers score: " + computerScore, "Your score: " + humanScore);

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