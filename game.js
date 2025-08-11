 const humanScoreDiv = document.querySelector('#humanScore');
 let humanScoreText = humanScoreDiv.textContent;
 let humanScore = parseInt(humanScoreText, 10);

 const computerScoreDiv = document.querySelector('#computerScore');
 let computerScoreText = computerScoreDiv.textContent;
 let computerScore = parseInt(humanScoreText, 10);

 
 const rowScore = document.querySelector('.row');
 const paraRunningRound = document.createElement('p');
 const messageScore = `Computers score: ${computerScore} Your score: ${humanScore}`;
  
 const buttonRock = document.querySelector('#rock');
buttonRock.addEventListener('click', function() {
  let humanChoice = "rock";
  let computerChoice = getComputerChoice();

 playRound(humanChoice, computerChoice);

  console.log(humanChoice, computerChoice);
  // humanScore++;
  humanScoreDiv.textContent = humanScore;
});

// humanScore++;
// humanScoreDiv.textContent = humanScore;
 

 console.log(messageScore);



function getComputerChoice(){
let randomNumber = parseInt(Math.random() * 100);
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


function playRound(humanChoice, computerChoice){
    // console.log("Computers choice: " + computerChoice);
    // console.log("Your choice: " + humanChoice);
    //IF computer winns
     if( (humanChoice == "rock" && computerChoice == "paper")
      || (humanChoice == "paper" && computerChoice == "scissors" ) 
      || (humanChoice == "scissors" && computerChoice == "rock") )
     {
        
        paraRunningRound.textContent = `Computer Selected ${computerChoice}. You lose! ${computerChoice} beats ${humanChoice}`;
        rowScore.appendChild(paraRunningRound);
      return computerScore++;}
        // console.log(`You lose! ${computerChoice} beats ${humanChoice}`);}    
       // IF human winns}
    else if ( (computerChoice == "scissors" && humanChoice == "rock") 
      || (computerChoice == "paper" && humanChoice == "scissors")
   || (computerChoice == "rock" && humanChoice == "paper") )
     {
       
        paraRunningRound.textContent = `Computer selected ${computerChoice}.You win! ${humanChoice} beats ${computerChoice}`;
        rowScore.appendChild(paraRunningRound);
         return humanScore++;
        // console.log(`You win! ${humanChoice} beats ${computerChoice}`);
     }
     else
     {
      paraRunningRound.textContent = "No points! Do it again!";
        rowScore.appendChild(paraRunningRound);
      // console.log("No points! Do it again!");
   }

    //  console.log(`Computers score: ${computerScore} Your score: ${humanScore}`);
}


// function playGame(){

//         for(i=1; i<=5; i++){

//             let humanChoice = getHumanChoice();
//             let computerChoice = getComputerChoice();

//              console.log("Round number: " + i );
//              playRound(humanChoice, computerChoice);
//         }
//         console.log("5 rounds are done!")
//         //winner is?

//         if (humanScore > computerScore){
//             console.log("You are the winner! After 5 rounds you have " + humanScore + " points and computer has " + computerScore + " points.");
//         }
//         else if (humanScore < computerScore){
//             console.log("You lost! After 5 rounds you have " + humanScore + " points and computer has " + computerScore + " points. Computer winns!");
//         }
//         else {
             
//             console.log("We have no winner! After 5 rounds you have " + humanScore + " points and computer has " + computerScore + " points.");
//         }
        
// }
//  playGame();