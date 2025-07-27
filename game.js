//let choice1 = prompt("message");
//console.log(choice1.toLowerCase());


let a = function getComputerChoice(){
        let x = parseInt(Math.random() * 100);

        if (x <= 33){
            console.log("rock");
        }
          else if (x > 33 && x < 66){
            console.log("paper");
        }
          if (x >= 66){
            console.log("scissors");
        }

}
a();
 


/*for (i=1; i<=5; i++ ) {
   let choice1 = prompt("message");
console.log(choice1.toLowerCase());
}*/

