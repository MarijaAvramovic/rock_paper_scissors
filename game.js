//let choice1 = prompt("message");
//console.log(choice1.toLowerCase());


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
let a = getComputerChoice();
console.log("Computers choice: " + a);
 
//users choice

let b = getHumanChoice();
function getHumanChoice(){

   let y = prompt("Rock, Paper, Scissors?");
    return y.toLowerCase();
}
console.log("Humans choice: " + b);

 // players score variables will start from 0
 let computerScore = 0;
 let humanScore = 0;
console.log(computerScore, humanScore);