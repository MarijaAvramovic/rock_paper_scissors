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
console.log(a);
 
//users choice

let b = getHumanChoice();
function getHumanChoice(){

   let y = prompt("Rock, Paper, Scissors?");
    return y.toLowerCase();
}
console.log(b);

 
