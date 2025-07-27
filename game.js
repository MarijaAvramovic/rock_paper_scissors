//let choice1 = prompt("message");
//console.log(choice1.toLowerCase());

 // players score variables will start from 0
 let computerScore = 0;
 let humanScore = 0;
 console.log("GAME START Computers score: " + computerScore, "Your score: " + humanScore);

function getComputerChoice(){
        let x = parseInt(Math.random() * 100);

        if (x <= 33){
              return "rock";
        }
          else if (x > 33 && x < 66){
            return "paper";
        }
          if (x >= 66){
            return "scissors";
        }

}


 
//users choice

let b = getHumanChoice();
function getHumanChoice(){
   let y = prompt("Rock, Paper, Scissors?");
    return y.toLowerCase();
}




//single round

function playRound(humanChoice, computerChoice){
    console.log("Computers choice: " + computerChoice);
    console.log("Your choice: " + humanChoice);
    //computer winns
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
       //computer winns

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
        
}
 playGame();