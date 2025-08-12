

 const humanScoreDiv = document.querySelector('#humanScore');
 let humanScoreText = humanScoreDiv.textContent;
 let humanScore = parseInt(humanScoreText, 10);

 const computerScoreDiv = document.querySelector('#computerScore');
 let computerScoreText = computerScoreDiv.textContent;
 let computerScore = parseInt(humanScoreText, 10);

 
 const roundAnnounce = document.querySelector('#roundAnnounce');
 const paraRunningRound = document.createElement('p');
 const messageScore = `Computers score: ${computerScore} Your score: ${humanScore}`;
 const buttons = document.querySelector('.button-group');
 const reset = document.createElement('button');

 const divHolderTwo = document.querySelector('.two');
 const divReset = document.createElement('div');
  
 const buttonRock = document.querySelector('#rock');
buttonRock.addEventListener('click', function() {
  let humanChoice = "rock";
  let computerChoice = getComputerChoice();

 playRound(humanChoice, computerChoice);
 humanScoreDiv.textContent = humanScore;
 computerScoreDiv.textContent = computerScore;
 finishGame();
});

 const buttonRock = document.querySelector('#rock');
buttonRock.addEventListener('click', function() {
  let humanChoice = "rock";
  let computerChoice = getComputerChoice();

 playRound(humanChoice, computerChoice);
 humanScoreDiv.textContent = humanScore;
 computerScoreDiv.textContent = computerScore;
 finishGame();
});

reset.addEventListener('click', function() {
  
 humanScoreDiv.textContent = 0;
 computerScoreDiv.textContent = 0;
  
 paraRunningRound.textContent = "Good Luck!"
 divHolderTwo.appendChild(buttons);
 this.remove();

  humanScore = 0;
  computerScore = 0;
  return (humanScore, computerScore);
});



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
  
     if( (humanChoice == "rock" && computerChoice == "paper")
      || (humanChoice == "paper" && computerChoice == "scissors" ) 
      || (humanChoice == "scissors" && computerChoice == "rock") )
     {
        
        paraRunningRound.textContent = `Computer Selected ${computerChoice}. You lose! ${computerChoice} beats ${humanChoice}`;
        roundAnnounce.appendChild(paraRunningRound);
      return computerScore++;}
        
       // IF human winns}
    else if ( (computerChoice == "scissors" && humanChoice == "rock") 
      || (computerChoice == "paper" && humanChoice == "scissors")
   || (computerChoice == "rock" && humanChoice == "paper") )
     {
       
        paraRunningRound.textContent = `Computer selected ${computerChoice}.You win! ${humanChoice} beats ${computerChoice}`;
        roundAnnounce.appendChild(paraRunningRound);
         return humanScore++;
         
     }
     else
     {
      paraRunningRound.textContent = "No points! Do it again!";
        roundAnnounce.appendChild(paraRunningRound);
      
   }
}


function finishGame(){
if(humanScore == 5 || computerScore == 5) {

  if (humanScore > computerScore){

    paraRunningRound.textContent = "You are the winner! You have " + humanScore + " points and computer has " + computerScore + " points.";
        roundAnnounce.appendChild(paraRunningRound);
            
        }
        else  {

          paraRunningRound.textContent = "You lost! You have " + humanScore + " points and computer has " + computerScore + " points. Computer winns!";
        roundAnnounce.appendChild(paraRunningRound);
            
        }
      

   buttons.remove();
   reset.textContent = "Play Again";
   reset.classList.add('btn');
   divHolderTwo.classList.add("button-group");
   divHolderTwo.appendChild(reset);

   
        
}



}

 
